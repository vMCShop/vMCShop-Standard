import React from 'react';
import styled from 'styled-components';

import darken from '@bit/styled-components.polished.color.darken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BaseButton from '@/common/components/Button/BaseButton';
import { Ripple } from '@/common/components/Ripple';

import { colors } from '@utils';

const StyledButton = styled(BaseButton)`
    padding: 6px 16px;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;

    color: ${colors.black};
    background-color: ${colors.default};

    border-radius: 4px;

    box-shadow:
        0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);

    transition:
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${darken(0.045, colors.default)};
    }

    ${({ withLeftIcon }) =>
        withLeftIcon &&
        `
        svg {
            margin-right: 6px;
        }
    `}

    ${({ withRightIcon }) =>
        withRightIcon &&
        `
            svg {
                margin-left: 6px;
            }
        `
    }

    ${({ size }) =>
        size === 'sm' &&
        `
        padding: 4px 8px;

        font-size: 0.8125rem;
    `}

    ${({ size }) =>
        size === 'lg' &&
        `
        padding: 8px 24px;

        font-size: 0.9375rem;
    `}

    ${({ color }) =>
        color === 'primary' &&
        `
        color: ${colors.white};
        background-color: ${colors.primary};

        &:hover {
            background-color: ${darken(0.03, colors.primary)};
        }
    `}

    ${({ color }) =>
        color === 'secondary' &&
        `
        color: ${colors.white};
        background-color: ${colors.secondary};

        &:hover {
            background-color: ${darken(0.03, colors.secondary)};
        }
    `}

    ${({ color }) =>
        color === 'success' &&
        `
        color: ${colors.white};
        background-color: ${colors.success};

        &:hover {
            background-color: ${darken(0.03, colors.success)};
        }
    `}

    ${({ color }) =>
        color === 'danger' &&
        `
        color: ${colors.white};
        background-color: ${colors.danger};

        &:hover {
            background-color: ${darken(0.03, colors.danger)};
        }
    `}

    ${({ color }) =>
        color === 'warning' &&
        `
        color: ${colors.white};
        background-color: ${colors.warning};

        &:hover {
            background-color: ${darken(0.03, colors.warning)};
        }
    `}

    ${({ color }) =>
        color === 'info' &&
        `
        color: ${colors.white};
        background-color: ${colors.info};

        &:hover {
            background-color: ${darken(0.03, colors.info)};
        }
    `}

    ${({ disabled }) =>
        disabled &&
        `
        color: rgba(0, 0, 0, 0.26);

        background-color: rgba(0, 0, 0, 0.12);

        box-shadow: none;

        cursor: default;

        &:hover {
            background-color: rgba(0, 0, 0, 0.12);
        }
    `}
`;

const Button = props => {
    let size = '';

    if (props.size === 'lg') {
        size = '';
    }

    return (
        <StyledButton {...props}>
            {props.withLeftIcon ? (
                <FontAwesomeIcon icon={props.withLeftIcon} transform={size} />
            ) : (
                ''
            )}
            {props.children}
            {props.withRightIcon ? (
                <FontAwesomeIcon icon={props.withRightIcon} transform={size} />
            ) : (
                ''
            )}
            {props.disabled ? '' : <Ripple />}
        </StyledButton>
    );
};

export default Button;
