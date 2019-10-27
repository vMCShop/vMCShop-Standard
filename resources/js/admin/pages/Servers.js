import React from 'react';
import styled from 'styled-components';

import { ServerCard } from '@/admin/components/Card';

import { media } from '@utils/index';

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
`;

const servers = [
  {
    name: 'Hardcore',
    image: 'https://via.placeholder.com/500',
    displayAddress: 'hc.vmcshop.pro',
    address: '127.0.0.1',
    port: '25565',
    connection: {
      method: 'rest',
      api: {
        url: 'http://hc.vmcshop.pro:8080/api',
        token: 'n25nu5j233njk5jkn233',
      },
      rcon: null,
    },
  },
  {
    name: 'Survival',
    image: 'https://via.placeholder.com/500',
    displayAddress: 'sv.vmcshop.pro',
    address: '127.0.0.2',
    port: '25565',
    connection: {
      method: 'rcon',
      api: null,
      rcon: {
        port: '25575',
        password: 'jbhk52',
      },
    },
  },
];

class Servers extends React.Component {
  render() {
    return (
      <Grid>
        {servers.map((server, index) => (
          <ServerCard config={server} key={index} />
        ))}
      </Grid>
    );
  }
}

export default Servers;
