import React from 'react';
import styled from 'styled-components';

const StyledTabPanel = styled.div`
    min-height: auto;
    padding-bottom: 2em;
`;

const TabPanel = ({ children }) => {
    return <StyledTabPanel>{children}</StyledTabPanel>;
};

export default TabPanel;
