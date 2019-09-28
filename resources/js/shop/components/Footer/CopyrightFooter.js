import React from 'react';
import styled from 'styled-components';

import { StyledContainer } from "@/common/components/Container";

import { media, colors } from '@utils';

const StyledCopyrightFooter = styled(StyledContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 2em auto;
    padding: 0;
    
    font-size: .9rem;
    font-weight: 100;
    
    ${media.laptop`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const StyledShopLink = styled.a`
    color: ${colors.success};
    
    text-decoration: none;
    
    transition: color .3s ease-in-out;
    
    &:hover {
        color: inherit;
    }
`;

const CopyrightFooter = () => {
    return (
        <StyledCopyrightFooter as="footer">
            <div>

            </div>
            <div>
                Proudly powered by <StyledShopLink href="https://vmcshop.pro/" target="_blank">vMCShop Standard</StyledShopLink> v3.0-alpha.1
            </div>
        </StyledCopyrightFooter>
    );
};

export default CopyrightFooter;
