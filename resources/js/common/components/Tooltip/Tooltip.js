import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { TweenMax } from 'gsap';

import { colors, theme } from '@utils';

const StyledTooltipBox = styled.div`
    position: relative;
`;

const StyledTooltip = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1500;

    padding: 0.5em 0.75em;

    background-color: ${colors.gray};

    font-size: 0.7em;
    line-height: 1.2;
    color: ${colors.white};

    border-radius: ${theme.border_radius};

    box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)},
        0 2px 10px 0 ${rgba(colors.black, 0.12)};
`;

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.tooltipBox = null;
        this.tooltip = null;
        this.animation = null;

        this.state = {
            visible: false,
        };
    }

    componentDidMount() {
        this.animation = TweenMax.set(this.tooltip, {
            x: this.getTooltipXPosition(),
            y: this.getTooltipYPosition(),
            scale: 0.2,
            opacity: 0,
        });
    }

    getTooltipXPosition = () => {
        const {
            x: boxX,
            width: boxWidth,
        } = this.tooltipBox.getBoundingClientRect();
        const { width: tooltipWidth } = this.tooltip.getBoundingClientRect();

        return boxX - boxX + boxWidth / 2 - tooltipWidth / 2;
    };

    getTooltipYPosition = () => {
        const { y: boxY } = this.tooltipBox.getBoundingClientRect();
        const { height: tooltipHeight } = this.tooltip.getBoundingClientRect();

        return boxY - boxY - tooltipHeight * 1.5;
    };

    handleAppear = () => {
        if (!this.state.visible) {
            const state = {
                visible: true,
            };

            this.animation = TweenMax.fromTo(
                this.tooltip,
                0.2,
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 1 }
            );

            this.setState(state);
        }
    };

    handleDisappear = () => {
        if (this.state.visible) {
            const state = {
                visible: false,
            };

            this.animation = TweenMax.fromTo(
                this.tooltip,
                0.2,
                { scale: 1, opacity: 1 },
                { scale: 0.2, opacity: 0 }
            );

            this.setState(state);
        }
    };

    render() {
        return (
            <StyledTooltipBox
                onMouseEnter={this.handleAppear}
                onMouseLeave={this.handleDisappear}
                ref={div => (this.tooltipBox = div)}
            >
                {this.props.children}
                <StyledTooltip ref={span => (this.tooltip = span)}>
                    {this.props.title}
                </StyledTooltip>
            </StyledTooltipBox>
        );
    }
}

export default Tooltip;
