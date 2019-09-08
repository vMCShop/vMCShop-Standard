import React from 'react';
import styled from 'styled-components';

import { BaseLayout } from '@/components/common/Layout';
import SidebarSection from '@/components/sections/common/SidebarSection';
import ServicesSection from '@/components/sections/shop/ServicesSection';

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
    }
];

const services = [
    {
        id: 1,
        name: 'Ranga VIP',
        image: 'https://via.placeholder.com/500',
        description: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        price: 11.07
    },
    {
        id: 2,
        name: 'Ranga VIP',
        image: 'https://via.placeholder.com/500',
        description: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        price: 11.07
    },
    {
        id: 3,
        name: 'Ranga VIP',
        image: 'https://via.placeholder.com/500',
        description: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        price: 11.07
    },
    {
        id: 4,
        name: 'Ranga VIP',
        image: 'https://via.placeholder.com/500',
        description: {
            short: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.',
            long: 'Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.'
        },
        price: 11.07
    }
];

class Shop extends React.Component {

    render() {
        return (
            <Grid>
                <SidebarSection serverStatuses={serverStatuses} />
                <ServicesSection horizontal data={services} />
            </Grid>
        )
    }

}

export default Shop;
