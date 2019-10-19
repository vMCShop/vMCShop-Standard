import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import BaseButton from '@/common/components/Button/BaseButton';

import { colors } from '@utils';

import chevron_right_solid from '@images/svg/chevron-right-solid.svg';

const StyledBreadcrumbsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &::after {
        content: url(${chevron_right_solid});

        width: 9px;
        height: 14px;

        margin: 0 0.5em;
    }

    &:last-child {
        &::after {
            display: none;
        }
    }
`;

const StyledTextButton = styled(BaseButton)`
    padding: 6px 8px;

    color: ${colors.primary};
    font-size: 0.875rem;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
    line-height: 1.75;

    color: ${colors.primary};
    text-transform: none;
    background-color: transparent;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        color: ${colors.success};
    }

    ${({ disabled }) =>
        disabled &&
        `
        color: rgba(0, 0, 0, 0.26);

        box-shadow: none;

        cursor: default;
        
        &:hover {
            color: rgba(0, 0, 0, 0.26);
        }
    `}
`;

const BreadcrumbsItem = ({ name, translation, to, active }) => {
    return (
        <StyledBreadcrumbsItem>
            <StyledTextButton
                color="info"
                as={to && Link}
                to={to}
                disabled={active}
            >
                {name ? name : translation ? translation : 'error'}
            </StyledTextButton>
        </StyledBreadcrumbsItem>
    );
};

export default BreadcrumbsItem;
