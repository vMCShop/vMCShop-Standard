import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

import { faHome, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import Menu from '@/admin/components/Sidebar/Menu';
import MenuItem from '@/admin/components/Sidebar/MenuItem';
import ToggleSidebarMenuItem from '@/admin/components/Sidebar/ToggleSidebarMenuItem';
import SeparatorMenuItem from '@/admin/components/Sidebar/SeparatorMenuItem';

import { colors } from '@utils';

const PosedSidebar = posed.aside({
    sidebarOpen: {
        width: '240px',
        delayChildren: 200,
        staggerChildren: 100,
    },
    sidebarClosed: {
        width: '85px',
        delay: 250,
    },
});

const StyledSidebar = styled(PosedSidebar)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100vh;

    background-color: ${colors.sidebar_background};
`;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        sidebarOpen: true,
    };

    handleSidebarToggle = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,
        });
    };

    render() {
        return (
            <StyledSidebar pose={this.state.sidebarOpen ? 'sidebarOpen' : 'sidebarClosed'}>
                <Menu pose={this.props.sidebarOpen}>
                    <MenuItem to="/admin/dashboard" icon={faHome}>
                        Dashboard
                    </MenuItem>
                    <SeparatorMenuItem />
                    <MenuItem to="/admin/users" icon={faHome}>
                        Users
                    </MenuItem>
                </Menu>
                <Menu pose={this.props.sidebarOpen} withoutIndicator>
                    <SeparatorMenuItem />
                    <ToggleSidebarMenuItem handleSidebarToggle={this.handleSidebarToggle} />
                </Menu>
            </StyledSidebar>
        );
    }
}

export default Sidebar;
