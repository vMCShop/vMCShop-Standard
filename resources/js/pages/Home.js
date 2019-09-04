import React from 'react';
import styled from 'styled-components';

import { BaseLayout } from '@/components/common/Layout';
import NewsSection from '@/components/sections/news/NewsSection';
import SidebarSection from '@/components/sections/common/SidebarSection';

import { theme, media, colors } from '@/utils';

const title = 'vMCShop.pro | Strona Główna';

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

const news = [
    {
        title: 'Hello World!',
        image: 'https://via.placeholder.com/500',
        content: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        author: 'Admin',
        date: {
            timestamp: 1567633550,
            forHuman: '03 maj 2019 o 15:32'
        }
    },
    {
        title: 'Hello World without image!',
        image: null,
        content: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        author: 'Admin',
        date: {
            timestamp: 1567633550,
            forHuman: '03 maj 2019 o 15:32'
        }
    },
    {
        title: 'Hello World without long content!',
        image: 'https://via.placeholder.com/500',
        content: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: null
        },
        author: 'Admin',
        date: {
            timestamp: 1567633550,
            forHuman: '03 maj 2019 o 15:32'
        }
    },
    {
        title: 'Hello World without image and long content!',
        image: null,
        content: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: null
        },
        author: 'Admin',
        date: {
            timestamp: 1567633550,
            forHuman: '03 maj 2019 o 15:32'
        }
    }
];

class Home extends React.Component {

    render() {
        return (
            <BaseLayout title={title}>
                <Grid>
                    <SidebarSection serverStatuses={serverStatuses} />
                    <NewsSection data={news} />
                </Grid>
            </BaseLayout>
        )
    }

}

export default Home;
