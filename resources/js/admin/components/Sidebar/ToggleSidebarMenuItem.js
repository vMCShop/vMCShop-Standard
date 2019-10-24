import React from 'react';
import posed from 'react-pose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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

class ToggleSidebarMenuItem extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleSidebarToggle}>
        <FontAwesomeIcon size="2x" transform="shrink-4" icon={faEllipsisV} fixedWidth />
        <PosedMenuItemText pose={this.props.pose}>Ukryj menu</PosedMenuItemText>
      </button>
    );
  }
}

export default ToggleSidebarMenuItem;
