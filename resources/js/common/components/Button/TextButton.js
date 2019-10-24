import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BaseButton from '@/common/components/Button/BaseButton';
import { Ripple } from '@/common/components/Ripple';

import { colors } from '@utils';

const StyledTextButton = styled(BaseButton)`
    padding: 6px 8px;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;

    color: ${colors.black};
    background-color: transparent;

    border-radius: 4px;

    transition:
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${rgba(colors.black, 0.08)};
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
    `}

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

        box-shadow: none;

        cursor: default;

        &:hover {
            background-color: transparent;
        }
    `}
`;

const TextButton = ({ children, size, color, withLeftIcon, withRightIcon, disabled }) => {
  return (
    <StyledTextButton
      size={size}
      color={color}
      withLeftIcon={withLeftIcon}
      withRightIcon={withRightIcon}
      disabled={disabled}
    >
      {withLeftIcon && <FontAwesomeIcon icon={withLeftIcon} />}
      {children}
      {withRightIcon && <FontAwesomeIcon icon={withRightIcon} />}
      {!disabled && <Ripple />}
    </StyledTextButton>
  );
};

TextButton.defaultProps = {
  size: 'md',
  color: 'default',
  withLeftIcon: null,
  withRightIcon: null,
  disabled: false,
};

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  withLeftIcon: PropTypes.object,
  withRightIcon: PropTypes.object,
  disabled: PropTypes.bool,
};

export default TextButton;
