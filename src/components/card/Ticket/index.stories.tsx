import React, { useState } from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
// components
import CenterWrap from '@/wrap/Center';
import TicketCard from '.';

export default {
  title: 'components/Card/Ticket',
  component: TicketCard,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
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

standard.storyName = 'v1.0.0';
