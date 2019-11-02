import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import {
  faDesktop,
  faUsers,
  faUser,
  faServer,
  faCubes,
  faFileCode,
  faPuzzlePiece,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '@/admin/components/Sidebar/Menu';
import MenuItem from '@/admin/components/Sidebar/MenuItem';
import ToggleSidebarMenuItem from '@/admin/components/Sidebar/ToggleSidebarMenuItem';
import SeparatorMenuItem from '@/admin/components/Sidebar/SeparatorMenuItem';

import { colors } from '@utils';

const PosedSidebar = posed.aside({
  sidebarOpen: {
    width: '270px',
    delayChildren: 250,
    staggerChildren: 50,
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
  overflow-x: auto;
  overflow-y: hidden;

  background-color: ${colors.sidebar_background};

  box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)}, 0 2px 10px 0 ${rgba(colors.black, 0.12)};
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
        <Menu sidebar={this.sidebar} pose={this.state.sidebarOpen}>
          <MenuItem
            to="/admin/profile"
            image="https://verlikylos.dev/static/avatar-7ba0d5b7025cbb87ffe7108d01a5a67d.jpg"
          >
            Verlikylos
          </MenuItem>
          <SeparatorMenuItem />
          <MenuItem to="/admin/dashboard" icon={faDesktop}>
            Pulpit
          </MenuItem>
          <MenuItem to="/admin/groups" icon={faUsers}>
            Grupy użytkowników
          </MenuItem>
          <MenuItem to="/admin/users" icon={faUser}>
            Użytkownicy
          </MenuItem>
          <MenuItem to="/admin/servers" icon={faServer}>
            Serwery
          </MenuItem>
          <MenuItem to="/admin/services" icon={faCubes}>
            Usługi
          </MenuItem>
          <SeparatorMenuItem />
          <MenuItem to="/admin/modules" icon={faPuzzlePiece}>
            Moduły
          </MenuItem>
          <SeparatorMenuItem />
          <MenuItem to="/admin/settings" icon={faCogs}>
            Ustawienia
          </MenuItem>
        </Menu>
        <Menu pose={this.state.sidebarOpen} withoutIndicator>
          <SeparatorMenuItem />
          <ToggleSidebarMenuItem handleSidebarToggle={this.handleSidebarToggle} />
        </Menu>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
