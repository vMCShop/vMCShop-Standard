import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import '../../../../../node_modules/normalize.css/normalize.css';

import { fontFace, colors } from '@utils';

const GlobalStyle = createGlobalStyle`
    ${fontFace('Roboto', 'Roboto/Roboto-Thin', '100')}
    ${fontFace('Roboto', 'Roboto/Roboto-ThinItalic', '100', 'italic')}

    ${fontFace('Roboto', 'Roboto/Roboto-Light', '300')}
    ${fontFace('Roboto', 'Roboto/Roboto-LightItalic', '300', 'italic')}

    ${fontFace('Roboto', 'Roboto/Roboto-Regular', '400')}
    ${fontFace('Roboto', 'Roboto/Roboto-Italic', '400', 'italic')}

    ${fontFace('Roboto', 'Roboto/Roboto-Medium', '500')}
    ${fontFace('Roboto', 'Roboto/Roboto-MediumItalic', '500', 'italic')}

    ${fontFace('Roboto', 'Roboto/Roboto-Bold', '700')}
    ${fontFace('Roboto', 'Roboto/Roboto-BoldItalic', '700', 'italic')}

    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Light', '300')}
    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Regular', '400')}
    ${fontFace('Roboto Slab', 'Roboto_Slab/RobotoSlab-Bold', '700')}

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;

        background-color: ${colors.background};
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        color: ${colors.primary};
    }
`;

const BaseLayout = ({ title }) => {
    return (
        <>
            <Helmet>
                <html lang="pl" />
                <title>{title}</title>
            </Helmet>

            <GlobalStyle />
        </>
    );
};

export default BaseLayout;
