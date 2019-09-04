import React from 'react';
import styled from 'styled-components';

import { BaseLayout } from '@/components/common/Layout';
// import { ServersSidebarSection, ServerServicesSection } from '@/components/sections';

import { theme, media, colors } from '@/utils';

const title = 'vMCShop.pro | Sklep';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 35px;
    
    ${media.laptop`
        grid-template-columns: 1fr 2fr;
    `}
`;

const serverStatuses = [
    {
        name: 'Hardcore',
        online: true,
        address: 'hc.vmcshop.pro',
        players: 235,
        maxPlayers: 500,
        version: '1.14.2'
    },
    {
        name: 'Survival',
        online: false,
        address: 'sv.vmcshop.pro',
        players: 124,
        maxPlayers: 300,
        version: '1.14.2'
    },
    {
        name: 'MiniGames',
        online: true,
        address: 'mg.vmcshop.pro',
        players: 784,
        maxPlayers: 1000,
        version: '1.14.2'
    },
];

const serverServices = [
    {
      name: 'Ranga VIP',
      image: '',
      description: 'lorem',
      price: '11.07'
    },
];

class Shop extends React.Component {

    render() {
        return (
            <BaseLayout title={title}>
                <Grid>
                    {/*<ServersSidebarSection serverStatuses={serverStatuses} />*/}
                    {/*<ServerServicesSection />*/}
                </Grid>
            </BaseLayout>
        )
    }

}

export default Shop;
