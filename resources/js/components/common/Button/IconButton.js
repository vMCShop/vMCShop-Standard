import React from 'react';
import styled from 'styled-components';

import rgba from '@bit/styled-components.polished.color.rgba';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from '@/components/common/Button/BaseButton';
import { Ripple } from '@/components/common/Ripple';

import { colors } from '@/utils';

const StyledIconButton = styled(BaseButton)`
    width: 40px;
    height: 40px;

    padding: 5px;

    font-size: 1.5rem;

    color: ${rgba(colors.black, 0.54)};
    background-color: transparent;

    border-radius: 50%;

    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${rgba(colors.black, 0.08)};
    }

    ${({size}) => size === 'xs' && `
        width: 34px;
        height: 34px;

        padding: 2px;
    `}

    ${({size}) => size === 'sm' && `
        width: 36px;
        height: 36px;

        padding: 3px;
    `}

    ${({size}) => size === 'lg' && `
        width: 50px;
        height: 50px;

        padding: 10px;
    `}

    ${({color}) => color === 'primary' && `
        color: ${colors.primary};

        &:hover {
            background-color: ${rgba(colors.primary, 0.08)};
        }
    `}

    ${({color}) => color === 'secondary' && `
        color: ${colors.secondary};

        &:hover {
            background-color: ${rgba(colors.secondary, 0.08)};
        }
    `}

    ${({color}) => color === 'success' && `
        color: ${colors.success};

        &:hover {
            background-color: ${rgba(colors.success, 0.08)};
        }
    `}

    ${({color}) => color === 'danger' && `
        color: ${colors.danger};

        &:hover {
            background-color: ${rgba(colors.danger, 0.08)};
        }
    `}

    ${({color}) => color === 'warning' && `
        color: ${colors.warning};

        &:hover {
            background-color: ${rgba(colors.warning, 0.08)};
        }
    `}

    ${({color}) => color === 'info' && `
        color: ${colors.info};

        &:hover {
            background-color: ${rgba(colors.info, 0.08)};
        }
    `}

    ${({disabled}) => disabled && `
        color: rgba(0, 0, 0, 0.26);

        cursor: default;

        &:hover {
            background-color: transparent;
        }
    `}
`;

const IconButton = (props) => {
    let size = 'shrink-2';

    if (props.size === 'xs') {
        size = 'shrink-6';
    } else if (props.size === 'sm') {
        size = 'shrink-4';
    } else if (props.size === 'lg') {
        size = '';
    }

    return (
        <StyledIconButton {...props}>
            <FontAwesomeIcon icon={props.icon} transform={size} fixedWidth />
            {props.disabled ? '' : <Ripple />}
        </StyledIconButton>
    )
}

export default IconButton;
