import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import { colors, media } from '@utils';

import Sidebar from '@/admin/components/Sidebar/Sidebar';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const StyledMain = styled.main`
  padding: 0 2em;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 75px;

  margin-bottom: 2em;

  border-bottom: 1px solid ${rgba(colors.gray, 0.2)};
`;

const StyledHeader = styled.h1`
  margin: 0;

  svg {
    margin-right: 0.5em;
  }
`;

class AdminLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Sidebar />
        <StyledMain>
          <Navbar>
            <StyledHeader>
              <FontAwesomeIcon icon={faDesktop} />
              Dashboard
            </StyledHeader>
          </Navbar>
          {this.props.children}
        </StyledMain>
      </Grid>
    );
  }
}

export default AdminLayout;
