import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

const StyledTabBody = styled.div`
  padding: 1.5em 1.25em;
`;

class TabBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledTabBody>
        <SwipeableViews
          index={this.props.getActiveTabIndex()}
          resistance={true}
          style={{ height: '100%' }}
          springConfig={{
            duration: '0.4s',
            easeFunction: 'ease-in-out',
            delay: '0s',
          }}
        >
          {this.props.children.map((child, i) => (
            <div key={i}>{child}</div>
          ))}
        </SwipeableViews>
      </StyledTabBody>
    );
  }
}

export default TabBody;
