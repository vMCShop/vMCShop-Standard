import React from 'react';
import styled from 'styled-components';

import { Card } from '@/common/components/Card';

const StyledTabsBox = styled(Card)`
  padding: 0;
`;

class TabsBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
    };
  }

  getActiveTabIndex = () => {
    return this.state.activeTabIndex;
  };

  setActiveTabIndex = (index, callback) => {
    this.setState(
      {
        activeTabIndex: index,
      },
      () => {
        callback();
      },
    );
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        getActiveTabIndex: this.getActiveTabIndex,
        setActiveTabIndex: (index, callback) => this.setActiveTabIndex(index, callback),
      });
    });

    return <StyledTabsBox>{children}</StyledTabsBox>;
  }
}

export default TabsBox;
