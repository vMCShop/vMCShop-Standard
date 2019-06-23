import React from 'react';
import styled from 'styled-components';

import { BaseLayout } from '@/components/common/Layout';
import { NewsSection, ServersSidebarSection } from '@/components/sections';

import { theme, media, colors } from '@/utils';

const title = 'vMCShop.pro | Strona Główna';

const StyledDiv = styled.div`
height: 100vh;
`;

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

class Home extends React.Component {

    render() {
        return (
            <BaseLayout title={title}>
                <Grid>
                    <ServersSidebarSection serverStatuses={serverStatuses} />
                    <NewsSection />
                </Grid>
            </BaseLayout>
        )
    }

}

export default Home;
