import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BaseButton from '@/common/components/Button/BaseButton';
import { Ripple } from '@/common/components/Ripple';

import { colors } from '@utils';

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

    ${({ size }) =>
      size === 'xs' &&
      `
        width: 34px;
        height: 34px;

        padding: 2px;
    `}

    ${({ size }) =>
      size === 'sm' &&
      `
        width: 36px;
        height: 36px;

        padding: 3px;
    `}

    ${({ size }) =>
      size === 'lg' &&
      `
        width: 50px;
        height: 50px;

        padding: 10px;
    `}

    ${({ color }) =>
      color === 'primary' &&
      `
        color: ${colors.primary};

        &:hover {
            background-color: ${rgba(colors.primary, 0.08)};
        }
    `}

    ${({ color }) =>
      color === 'secondary' &&
      `
        color: ${colors.secondary};

        &:hover {
            background-color: ${rgba(colors.secondary, 0.08)};
        }
    `}

    ${({ color }) =>
      color === 'success' &&
      `
        color: ${colors.success};

        &:hover {
            background-color: ${rgba(colors.success, 0.08)};
        }
    `}

    ${({ color }) =>
      color === 'danger' &&
      `
        color: ${colors.danger};

        &:hover {
            background-color: ${rgba(colors.danger, 0.08)};
        }
    `}

    ${({ color }) =>
      color === 'warning' &&
      `
        color: ${colors.warning};

        &:hover {
            background-color: ${rgba(colors.warning, 0.08)};
        }
    `}

    ${({ color }) =>
      color === 'info' &&
      `
        color: ${colors.info};

        &:hover {
            background-color: ${rgba(colors.info, 0.08)};
        }
    `}

    ${({ disabled }) =>
      disabled &&
      `
        color: rgba(0, 0, 0, 0.26);

        cursor: default;

        &:hover {
            background-color: transparent;
        }
    `}
`;

const IconButton = ({ size, color, icon, disabled }) => {
  let iconSize = 'shrink-2';

  if (size === 'xs') {
    iconSize = 'shrink-6';
  } else if (size === 'sm') {
    iconSize = 'shrink-4';
  } else if (size === 'lg') {
    iconSize = '';
  }

  return (
    <StyledIconButton size={size} color={color} disabled={disabled}>
      <FontAwesomeIcon icon={icon} transform={iconSize} fixedWidth />
      {!disabled && <Ripple />}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  size: 'md',
  color: 'default',
  disabled: false,
};

IconButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  icon: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

export default IconButton;
