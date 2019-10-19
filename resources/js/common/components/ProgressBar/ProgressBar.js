import React from 'react';
import styled from 'styled-components';

import { theme, media, colors } from '@utils';

const StyledProgressBar = styled.progress`
    display: block;

    width: 100%;
    height: 0.25em;

    margin: 0.75em 0;

    background-color: ${colors.background};

    ::-webkit-progress-bar {
        background-color: ${colors.background};
    }
    ::-webkit-progress-value {
        background-color: ${({ color }) => (color ? color : colors.primary)};
    }
    ::-moz-progress-bar {
        background-color: ${colors.background};
    }
`;

const ProgressBar = props => {
    return <StyledProgressBar {...props}></StyledProgressBar>;
};

export default ProgressBar;
