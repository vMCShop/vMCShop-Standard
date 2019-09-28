import React from 'react';
import styled from 'styled-components';

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
                {this.props.children.map((child, i) => (
                    <div key={i} style={i !== this.props.getActiveTabIndex() ? {display: 'none'} : {display: 'block'}}>{child}</div>
                ))}
            </StyledTabBody>
        );
    }
}

export default TabBody;
