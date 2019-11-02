import React from 'react';
import debounce from 'lodash.debounce';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { TweenMax } from 'gsap';

import SeparatorMenuItem from '@/admin/components/Sidebar/SeparatorMenuItem';

import { colors, theme } from '@utils';

const StyledMenu = styled.nav`
  overflow: hidden;
`;

const StyledList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled.li`
  position: relative;
  margin: 0;
  padding: 1em;

  img {
    padding: 4.5px;
    margin-right: 0.5em;
  }

  svg {
    ${({ sidebarOpen }) =>
      !sidebarOpen &&
      `
            img {
                margin-right: 0.25em;
            }
        `};

    color: ${colors.sidebar_icon};

    ${({ active }) =>
      active &&
      `
            color: ${colors.success};
        `};

    transition: color 0.2s ease-in-out;
  }

  a,
  button {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    padding: 0.25em;

    color: ${colors.sidebar_text};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 400;

    background-color: transparent;

    border-radius: ${theme.border_radius};
    border: 0;
    outline: 0;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      ${({ active }) =>
        !active &&
        `
                background-color: ${rgba(colors.sidebar_icon, 0.2)};
                color: ${colors.white};
                
                svg {
                    color: ${colors.sidebar_text};
                }
            `}
    }

    ${({ active }) =>
      active &&
      `
            color: ${colors.success};
        `};
  }

  span {
    white-space: nowrap;
  }
`;

const StyledSeparatorMenuItem = styled.li`
  padding: 0;
`;

const ActiveIndicator = styled.span`
  position: absolute;

  display: block;

  width: 4px;
  height: 2.2em;

  background-color: ${colors.success};

  border-radius: 2px;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [];
    this.indicator = 0;
    this.activeItemIndex = 0;
    this.indicatorAnimation = null;
  }

  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    if (!this.props.withoutIndicator) {
      this.setActiveItemIndex(this.getActiveItemIndex(), () => this.updateIndicatorPosition(true));
    }
  }

  getIndicatorPosition = () => {
    const { y } = this.menuItems[this.state.activeItemIndex].getBoundingClientRect();

    return y + this.getItemHeight() / 3;
  };

  getActiveItemIndex = () => {
    let index = 0;

    this.menuItems.forEach((item, i) => {
      if (item.dataset.to === this.props.location.pathname) index = i;
    });

    return index;
  };

  setActiveItemIndex = (index, callback) => {
    this.setState(
      {
        activeItemIndex: index,
      },
      () => {
        callback();
      },
    );
  };

  getItemHeight = () => {
    const { height } = this.menuItems[this.state.activeItemIndex].getBoundingClientRect();

    return height;
  };

  updateIndicatorPosition = starting => {
    if (!starting)
      this.indicatorAnimation = TweenMax.to(this.indicator, 0.3, {
        y: this.getIndicatorPosition(),
        height: this.getItemHeight() / 3,
        ease: 'Power4',
      });
    else
      this.indicatorAnimation = TweenMax.set(this.indicator, {
        y: this.getIndicatorPosition(),
        height: this.getItemHeight() / 3,
        ease: 'Power4',
      });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (item, i) => {
      if (!(item.type instanceof SeparatorMenuItem))
        return React.cloneElement(item, {
          index: i,
          setActiveItemIndex: this.setActiveItemIndex,
          updateIndicatorPosition: this.updateIndicatorPosition,
        });
      else return item;
    });

    return (
      <StyledMenu>
        {!this.props.withoutIndicator && <ActiveIndicator ref={indicator => (this.indicator = indicator)} />}
        <StyledList>
          {childrenWithProps.map((item, i) => {
            if (!(item.type === SeparatorMenuItem))
              return (
                <StyledMenuItem
                  sidebarOpen={this.props.pose}
                  data-to={item.props.to}
                  active={item.props.to === this.props.location.pathname}
                  ref={item => (this.menuItems[this.menuItems.length] = item)}
                  key={i}
                >
                  {item}
                </StyledMenuItem>
              );
            else
              return (
                <StyledSeparatorMenuItem ref={item => (this.menuItems[this.menuItems.length] = item)} key={i}>
                  {item}
                </StyledSeparatorMenuItem>
              );
          })}
        </StyledList>
      </StyledMenu>
    );
  }
}

export default withRouter(Menu);
