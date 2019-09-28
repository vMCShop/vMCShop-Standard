import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import darken from '@bit/styled-components.polished.color.darken';
import { TweenMax } from 'gsap';

import BaseButton from "@/common/components/Button/BaseButton";

import { media, colors, theme } from '@utils';

const StyledTabsBar = styled.nav`
    position: relative;
    
    box-shadow: 0 2px 5px 0 ${rgba(colors.black ,.16)}, 0 2px 10px 0 ${rgba(colors.black ,.12)};
`;

const StyledTabsList = styled.ul`
    list-style: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    min-height: 50px;
    
    margin: 0;
    padding: 0;
    
    background-color: ${colors.primary};
    
    border-top-left-radius: ${theme.border_radius};
    border-top-right-radius: ${theme.border_radius};
    
    ${media.tablet`
        flex-direction: row;
    `}
`;

const StyledIndicator = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    
    height: 3px;
    width: 100px;
    
    background-color: ${colors.success};
`;

const StyledTabsListItem = styled.li`
  width: 100%;
  height: 100%;
  min-height: 50px;
  
  border-bottom: 1px solid ${darken(0.1, colors.primary)};
  
  ${media.tablet`
    border-bottom: 0;
  `}
`;

const StyledButton = styled(BaseButton)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    min-height: 50px;

    margin: 0;
    padding: 0;
`;

class TabsBar extends React.Component {

    constructor(props) {
        super(props);

        this.tabList = [];
        this.indicator = null;
        this.activeTabIndex = 0;
        this.indicatorAnimation = null;
    }

    componentDidMount() {

        this.indicatorAnimation = TweenMax.set(this.indicator, {x: this.getIndicatorPosition() / 2, width: this.getItemWidth()});

        window.addEventListener('resize', this.updateIndicatorPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIndicatorPosition);
    }


    getIndicatorPosition = () => {
        const { x: firstX } = this.tabList[0].getBoundingClientRect();
        const { x: currentX } = this.tabList[this.props.getActiveTabIndex()].getBoundingClientRect();

        return currentX - firstX;
    };

    getItemWidth = () => {
        const { width } = this.tabList[this.props.getActiveTabIndex()].getBoundingClientRect();

        return width;
    };

    updateIndicatorPosition = () => {
        this.indicatorAnimation = TweenMax.to(this.indicator, .3, {x: this.getIndicatorPosition(), width: this.getItemWidth(), ease: 'Power4'});
    };

    render() {
        return (
            <StyledTabsBar>
                <StyledTabsList>
                    {this.props.children.map((item, i) => (
                        <StyledTabsListItem key={i}>
                            <StyledButton ref={button => this.tabList[this.tabList.length] = button} onClick={() => this.props.setActiveTabIndex(i, this.updateIndicatorPosition)}>
                                {item}
                            </StyledButton>
                        </StyledTabsListItem>
                    ))}
                </StyledTabsList>
                <StyledIndicator ref={span => this.indicator = span} />
            </StyledTabsBar>
        );
    }

}

export default TabsBar;
