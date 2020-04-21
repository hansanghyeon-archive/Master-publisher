/* eslint-disable no-plusplus */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable max-classes-per-file */
import React from 'react';
import {
  DefaultPortModel,
  DefaultLinkFactory,
  DefaultLinkModel,
  DefaultLinkWidget,
} from '@projectstorm/react-diagrams';
import { LinkWidget, PointModel } from '@projectstorm/react-diagrams-core';

class AdvancedLinkModel extends DefaultLinkModel {
  constructor() {
    super({
      type: 'advanced',
      width: 4,
    });
  }
}

class AdvancedPortModel extends DefaultPortModel {
  createLinkModel(): AdvancedLinkModel | null {
    return new AdvancedLinkModel();
  }
}

const CustomLinkArrowWidget = (props: any) => {
  const { point, previousPoint, color } = props;

  const angle =
    90 +
    (Math.atan2(
      point.getPosition().y - previousPoint.getPosition().y,
      point.getPosition().x - previousPoint.getPosition().x,
    ) *
      180) /
      Math.PI;

  // translate(50, -10),
  return (
    <g
      className="arrow"
      transform={`translate(${point.getPosition().x}, ${
        point.getPosition().y
      })`}
    >
      <g style={{ transform: `rotate(${angle}deg)` }}>
        <g transform="translate(0, -3)">
          <polygon
            points="0,10 6,20 -6,20"
            fill={color}
            onMouseLeave={() => {
              this.setState({ selected: false });
            }}
            onMouseEnter={() => {
              this.setState({ selected: true });
            }}
            data-id={point.getID()}
            data-linkid={point.getLink().getID()}
          />
        </g>
      </g>
    </g>
  );
};

export class AdvancedLinkWidget extends DefaultLinkWidget {
  generateArrow(point: PointModel, previousPoint: PointModel): JSX.Element {
    return (
      <CustomLinkArrowWidget
        key={point.getID()}
        point={point as any}
        previousPoint={previousPoint as any}
        colorSelected={this.props.link.getOptions().selectedColor}
        color={this.props.link.getOptions().color}
      />
    );
  }

  render() {
    // ensure id is present for all points on the path
    const points = this.props.link.getPoints();
    const paths = [];
    this.refPaths = [];

    // draw the multiple anchors and complex line instead
    for (let j = 0; j < points.length - 1; j++) {
      paths.push(
        this.generateLink(
          LinkWidget.generateLinePath(points[j], points[j + 1]),
          {
            'data-linkid': this.props.link.getID(),
            'data-point': j,
            onMouseDown: (event: MouseEvent) => {
              this.addPointToLink(event, j + 1);
            },
          },
          j,
        ),
      );
    }

    // render the circles
    for (let i = 1; i < points.length - 1; i++) {
      paths.push(this.generatePoint(points[i]));
    }

    if (this.props.link.getTargetPort() !== null) {
      paths.push(
        this.generateArrow(
          points[points.length - 1],
          points[points.length - 2],
        ),
      );
    } else {
      paths.push(this.generatePoint(points[points.length - 1]));
    }

    return (
      <g data-default-link-test={this.props.link.getOptions().testName}>
        {paths}
      </g>
    );
  }
}

export class AdvancedLinkFactory extends DefaultLinkFactory {
  constructor() {
    super('advanced');
  }

  generateModel(): AdvancedLinkModel {
    return new AdvancedLinkModel();
  }

  generateReactWidget(event): JSX.Element {
    return (
      <AdvancedLinkWidget link={event.model} diagramEngine={this.engine} />
    );
  }
}

export default AdvancedPortModel;
