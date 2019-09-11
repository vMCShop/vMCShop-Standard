import React from 'react';
import styled from 'styled-components';

import rgba from '@bit/styled-components.polished.color.rgba';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from '@/common/components/Button/BaseButton';
import { Ripple } from '@/common/components/Ripple';

import { colors } from '@utils';

const StyledOutlinedButton = styled(BaseButton)`
    padding: 6px 16px;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;

    color: ${rgba(colors.black, 0.74)};
    background-color: transparent;

    border: 1px solid ${rgba(colors.black, 0.5)};
    border-radius: 4px;

    transition:
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${rgba(colors.black, 0.08)};
    }

    ${({withLeftIcon}) => withLeftIcon && `
        svg {
            margin-right: 6px;
        }
    `}

    ${({withRightIcon}) => withRightIcon && `
        svg {
            margin-left: 6px;
        }
    `}

    ${({size}) => size === 'sm' && `
        padding: 4px 8px;

        font-size: 0.8125rem;
    `}

    ${({size}) => size === 'lg' && `
        padding: 8px 24px;

        font-size: 0.9375rem;
    `}

    ${({color}) => color === 'primary' && `
        color: ${colors.primary};

        border: 1px solid ${rgba(colors.primary, 0.5)};

        &:hover {
            background-color: ${rgba(colors.primary, 0.08)};
        }
    `}

    ${({color}) => color === 'secondary' && `
        color: ${colors.secondary};

        border: 1px solid ${rgba(colors.secondary, 0.5)};

        &:hover {
            background-color: ${rgba(colors.secondary, 0.08)};
        }
    `}

    ${({color}) => color === 'success' && `
        color: ${colors.success};

        border: 1px solid ${rgba(colors.success, 0.5)};

        &:hover {
            background-color: ${rgba(colors.success, 0.08)};
        }
    `}

    ${({color}) => color === 'danger' && `
        color: ${colors.danger};

        border: 1px solid ${rgba(colors.danger, 0.5)};

        &:hover {
            background-color: ${rgba(colors.danger, 0.08)};
        }
    `}

    ${({color}) => color === 'warning' && `
        color: ${colors.warning};

        border: 1px solid ${rgba(colors.warning, 0.5)};

        &:hover {
            background-color: ${rgba(colors.warning, 0.08)};
        }
    `}

    ${({color}) => color === 'info' && `
        color: ${colors.info};

        border: 1px solid ${rgba(colors.info, 0.5)};

        &:hover {
            background-color: ${rgba(colors.info, 0.08)};
        }
    `}

    ${({disabled}) => disabled && `
        color: rgba(0, 0, 0, 0.26);

        border: 1px solid ${rgba(colors.black, 0.26)};

        box-shadow: none;

        cursor: default;

        &:hover {
            background-color: transparent;
        }
    `}
`;

const OutlinedButton = (props) => {
    return (
        <StyledOutlinedButton {...props}>
            {props.withLeftIcon ? <FontAwesomeIcon icon={props.withLeftIcon} /> : ''}
            {props.children}
            {props.withRightIcon ? <FontAwesomeIcon icon={props.withRightIcon} /> : ''}
            {props.disabled ? '' : <Ripple />}
        </StyledOutlinedButton>
    )
}

export default OutlinedButton;
