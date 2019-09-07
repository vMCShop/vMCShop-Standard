import React from 'react';
import styled from 'styled-components';

import { BaseLayout } from '@/components/common/Layout';
import SidebarSection from '@/components/sections/common/SidebarSection';

import { media } from '@/utils';

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
        id: 1,
        name: 'Hardcore',
        online: true,
        address: 'hc.vmcshop.pro',
        players: 235,
        maxPlayers: 500,
        version: '1.14.2'
    },
    {
        id: 2,
        name: 'Survival',
        online: false,
        address: 'sv.vmcshop.pro',
        players: 124,
        maxPlayers: 300,
        version: '1.14.2'
    },
    {
        id: 3,
        name: 'MiniGames',
        online: true,
        address: 'mg.vmcshop.pro',
        players: 784,
        maxPlayers: 1000,
        version: '1.14.2'
    },
];

class Shop extends React.Component {

    render() {
        return (
            <BaseLayout title={title}>
                <Grid>
                    <SidebarSection serverStatuses={serverStatuses} />

                </Grid>
            </BaseLayout>
        )
    }

}

export default Shop;
