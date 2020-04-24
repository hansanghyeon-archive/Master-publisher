import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import createEngine, {
  DefaultNodeModel,
  DefaultLinkModel,
} from '@projectstorm/react-diagrams';
import { DiagramModel } from '@projectstorm/react-diagrams-core';
import {
  CanvasWidget,
  // SelectionBoxLayerFactory,
} from '@projectstorm/react-canvas-core';
import AdvancedPortModel, { AdvancedLinkFactory } from './AdvancedPortModel';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
`;

export default ({ data }: any) => {
  const [engine] = useState(() => {
    const diagramEngine = createEngine();
    diagramEngine.getLinkFactories().registerFactory(new AdvancedLinkFactory());
    return diagramEngine;
  });
  const [model] = useState(() => {
    const diagramModel = new DiagramModel();
    return diagramModel;
  });
  engine.setModel(model);
  useEffect(() => {
    const TitleNode = new DefaultNodeModel({
      name: data.title,
      color: 'rgb(255, 255, 255)',
    });
    TitleNode.setPosition(24, 24);
    // node 1
    const clientNode = new DefaultNodeModel({
      name: 'Client',
      color: '#2BC0C9',
    });
    clientNode.setPosition(24, 80);
    clientNode.addOutPort('');
    const clientNodePort1 = clientNode.addPort(
      new AdvancedPortModel(false, 'port1'),
    );
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    const clientNodePort2 = clientNode.addPort(
      new AdvancedPortModel(false, 'port2'),
    );
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    const clientNodePort3 = clientNode.addPort(
      new AdvancedPortModel(false, 'port3'),
    );
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    clientNode.addOutPort('');
    const clientNodePort4 = clientNode.addPort(
      new AdvancedPortModel(false, 'port4'),
    );
    clientNode.addOutPort('');

    // node 2
    const serverNode = new DefaultNodeModel({
      name: 'Server',
      color: '#270E40',
    });
    serverNode.setPosition(200, 80);
    serverNode.addInPort('');
    const serverNodePort1 = serverNode.addPort(
      new AdvancedPortModel(true, 'port1'),
    );
    serverNode.addInPort('');
    serverNode.addInPort('');
    serverNode.addInPort('');
    const serverNodePort2 = serverNode.addPort(
      new AdvancedPortModel(true, 'port2'),
    );
    serverNode.addInPort('');
    serverNode.addInPort('');
    serverNode.addInPort('');
    const serverNodePort3 = serverNode.addPort(
      new AdvancedPortModel(true, 'port3'),
    );
    serverNode.addInPort('');
    serverNode.addInPort('');
    serverNode.addInPort('');
    const serverNodePort4 = serverNode.addPort(
      new AdvancedPortModel(true, 'port4'),
    );
    serverNode.addInPort('');

    const link1 = clientNodePort1.link<DefaultLinkModel>(serverNodePort1);
    const link2 = serverNodePort2.link<DefaultLinkModel>(clientNodePort2);
    const link3 = clientNodePort3.link<DefaultLinkModel>(serverNodePort3);
    const link4 = serverNodePort4.link<DefaultLinkModel>(clientNodePort4);
    link1.addLabel(data.label[0]);
    link2.addLabel(data.label[1]);
    link3.addLabel(data.label[2]);
    link4.addLabel(data.label[3]);

    model.addAll(link1, link2, link3, link4);
    model.addAll(TitleNode, clientNode, serverNode);
    model.setLocked(true);
  });
  return (
    <Wrap>
      <CanvasWidget engine={engine} />
    </Wrap>
  );
};
