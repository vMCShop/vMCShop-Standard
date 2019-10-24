import React from 'react';
import styled from 'styled-components';
import {
  faComments,
  faNewspaper,
  faFileCode,
  faInfo,
  faTrophy,
  faTicketAlt,
  faGavel,
} from '@fortawesome/free-solid-svg-icons';

import { ModuleCard } from '@/admin/components/Card';

import { media, colors } from '@utils';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 35px;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};

  ${media.laptop`
    grid-template-columns: 1fr 1fr 1fr;
  `};

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const modules = [
  {
    icon: faComments,
    name: 'Forum',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [
      {
        title: 'Zarządzaj forami',
        color: 'primary',
        href: '/',
      },
    ],
  },
  {
    icon: faInfo,
    name: 'Centrum pomocy',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [
      {
        title: 'Zarządzaj zgłoszeniami',
        color: 'primary',
        href: '/',
      },
    ],
  },
  {
    icon: faNewspaper,
    name: 'Aktualności',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: true,
    buttons: [
      {
        title: 'Zarządzaj wpisami',
        color: 'primary',
        href: '/',
      },
    ],
  },
  {
    icon: faTicketAlt,
    name: 'Vouchery',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [
      {
        title: 'Zarządzaj voucherami',
        color: 'primary',
        href: '/',
      },
    ],
  },
  {
    icon: faFileCode,
    name: 'Własne strony',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [
      {
        title: 'Zarządzaj stronami',
        color: 'primary',
        href: '/',
      },
    ],
  },
  {
    icon: faTrophy,
    name: 'TOPka',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [],
  },
  {
    icon: faGavel,
    name: 'Lista kar',
    description:
      'incididunt esse in do minim do excepteur consequat aliquip reprehenderit fugiat magna non excepteur amet nisi esse labore enim eu amet occaecat consequat sunt nulla est',
    enabled: false,
    buttons: [],
  },
];

class Modules extends React.Component {
  render() {
    return (
      <Grid>
        {modules.map((module, index) => (
          <ModuleCard config={module} key={index} />
        ))}
      </Grid>
    );
  }
}

export default Modules;
