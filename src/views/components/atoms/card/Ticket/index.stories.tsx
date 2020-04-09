import React, { useState } from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withPreview } from 'storybook-addon-preview';
// components
import CenterWrap from '@atom/wrap/Center';
import TicketCard from '.';
import previews from './previews';

export default {
  title: '01. atoms/Card/Ticket',
  component: TicketCard,
  decorators: [
    withKnobs,
    withPreview,
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
standard.story = {
  name: 'v1.0.0',
  parameters: {
    preview: previews,
  },
};
