import React from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Ripple } from '@/common/components/Ripple';

const PosedMenuItemText = posed.span({
    sidebarOpen: {
        opacity: 1,
        applyAtStart: {
            display: 'inline-block',
        },
    },
    sidebarClosed: {
        opacity: 0,
        applyAtEnd: {
            display: 'none',
        },
    },
});

class MenuItem extends React.Component {
    render() {
        return (
            <Link
                to={this.props.to}
                onClick={() => this.props.setActiveItemIndex(this.props.index, this.props.updateIndicatorPosition)}
            >
                <FontAwesomeIcon size="2x" transform="shrink-4" icon={this.props.icon} fixedWidth />
                <PosedMenuItemText pose={this.props.pose}>{this.props.children}</PosedMenuItemText>
                <Ripple />
            </Link>
        );
    }
}

export default MenuItem;
