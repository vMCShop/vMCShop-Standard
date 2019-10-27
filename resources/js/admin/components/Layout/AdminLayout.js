import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faHome, faBook, faComments } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import Sidebar from '@/admin/components/Sidebar/Sidebar';
import { TextButton } from '@/common/components/Button';

import { colors, media } from '@utils';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 75px;

  margin: 0 2em 2em 2em;

  border-bottom: 1px solid ${rgba(colors.gray, 0.2)};
`;

const StyledHeader = styled.h1`
  margin: 0;

  svg {
    margin-right: 0.5em;
  }
`;

const StyledMain = styled.main`
  min-height: calc(100vh - 214px);

  padding: 0 2em;
`;

const Footer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 75px;

  margin: 2em 2em 0 2em;

  border-top: 1px solid ${rgba(colors.gray, 0.2)};
`;

const FooterNavigation = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  li {
    margin: 0 0.5em;
  }

  li:first-child {
    margin-left: 0;
  }
`;

const FooterCopyright = styled.span`
  display: block;

  font-size: 0.9rem;
  font-weight: 100;

  a {
    color: ${colors.success};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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
        <div>
          <Navbar>
            <StyledHeader>
              <FontAwesomeIcon icon={faDesktop} />
              Dashboard
            </StyledHeader>
          </Navbar>

          <StyledMain>{this.props.children}</StyledMain>

          <Footer>
            <nav>
              <FooterNavigation>
                <li>
                  <TextButton color="default" withLeftIcon={faHome}>
                    Strona główna
                  </TextButton>
                </li>
                <li>
                  <TextButton color="default" withLeftIcon={faBook}>
                    Dokumentacja
                  </TextButton>
                </li>
                <li>
                  <TextButton color="default" withLeftIcon={faComments}>
                    Forum
                  </TextButton>
                </li>
                <li>
                  <TextButton color="default" withLeftIcon={faDiscord}>
                    Discord
                  </TextButton>
                </li>
              </FooterNavigation>
            </nav>
            <FooterCopyright>
              Proudly powered by{' '}
              <a href="https://vmcshop.pro/" target="_blank">
                vMCShop Standard
              </a>{' '}
              v3.0-alpha.1
            </FooterCopyright>
          </Footer>
        </div>
      </Grid>
    );
  }
}

export default AdminLayout;
