import React, { useState } from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { createGlobalStyle } from 'styled-components';
// import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import TicketCard from '.';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }
`;

export default {
  title: '01. atoms/Card/Ticket',
  component: TicketCard,
  decorators: [
    withKnobs,
    (storyFn: any) => (
      <>
        <GlobalStyle />
        <CenterWrap>{storyFn()}</CenterWrap>
      </>
    ),
  ],
};

const MockContext = () => {
  const [isUsed, setIsused] = useState(false);
  const StartRegion = object('Start region', {
    name: 'LIM',
    region: 'San Isidro',
    address: 'Dos de mayo 261',
  });
  const EndRegion = object('End region', {
    name: 'LIM',
    region: 'San Borja',
    address: 'Aviacion 1282',
  });
  const DetailData = object('Ticket detil', {
    passenger: 'Christian Vizcarra',
    seat: 'C25',
    date: new Date(),
    time: new Date(),
    busNumber: 'AUI813',
    busstop: 'Las Flores',
  });
  const props = {
    data: {
      start: StartRegion,
      end: EndRegion,
      detail: DetailData,
    },
    onClick: () => {
      setIsused(!isUsed);
    },
    isUsed,
  };

  return <TicketCard {...props} />;
};

export const standard = () => <MockContext />;
