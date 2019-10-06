import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Ripple } from '@/common/components/Ripple';

import { colors, theme } from '@utils';

import check_solid from '@images/svg/check-solid.svg';

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    margin-top: .5em;
`;

const StyledInputWrapper = styled.div`
    box-sizing: content-box;

    position: relative;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    width: 24px;
    height: 24px;
    
    padding: .5em;
    
    border-radius: 50%;
    
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    &:hover {
        background-color: ${rgba(colors.default, 0.08)};
    }
    
    ${({color}) => color === 'primary' && `
        &:hover {
            background-color: ${rgba(colors.primary, 0.08)};
        }
    `}

    ${({color}) => color === 'secondary' && `
        &:hover {
            background-color: ${rgba(colors.secondary, 0.08)};
        }
    `}

    ${({color}) => color === 'success' && `
        &:hover {
            background-color: ${rgba(colors.success, 0.08)};
        }
    `}

    ${({color}) => color === 'danger' && `
        &:hover {
            background-color: ${rgba(colors.danger, 0.08)};
        }
    `}

    ${({color}) => color === 'warning' && `
        &:hover {
            background-color: ${rgba(colors.warning, 0.08)};
        }
    `}

    ${({color}) => color === 'info' && `
        &:hover {
            background-color: ${rgba(colors.info, 0.08)};
        }
    `}
`;

const StyledCheckbox = styled.input`
    position: absolute;
    z-index: 100;
    
    width: 100%;
    height: 100%;
    
    opacity: 0;
    cursor: pointer;
    
    &:checked ~ span {
        background-color: ${colors.default};
        border-color: ${colors.default};
        
        &:after {
            display: inline-block;
        }
        
        ${({color}) => color === 'primary' && `
            background-color: ${colors.primary};
            border-color: ${colors.primary};
        `}
    
        ${({color}) => color === 'secondary' && `
            background-color: ${colors.secondary};
            border-color: ${colors.secondary};
        `}
    
        ${({color}) => color === 'success' && `
            background-color: ${colors.success};
            border-color: ${colors.success};
        `}
    
        ${({color}) => color === 'danger' && `
            background-color: ${colors.danger};
            border-color: ${colors.danger};
        `}
    
        ${({color}) => color === 'warning' && `
            background-color: ${colors.warning};
            border-color: ${colors.warning};
        `}
    
        ${({color}) => color === 'info' && `
            background-color: ${colors.info};
            border-color: ${colors.info};
        `}
    }
`;

const StyledCheckMark = styled.span`   
    height: 18px;
    width: 18px;
    
    background-color: transparent;
    
    border: 2px solid ${colors.gray};
    border-radius: calc(${theme.border_radius} / 2);
    
    &:after {
        content: '';
        mask: url(${check_solid});
        mask-size: cover;
        
        display: none;
        
        width: 14px;
        height: 14px;
        
        background-color: ${colors.gray};
        
        ${({color}) => color && `
            background-color: ${colors.white};
        `}
    }
`;

const StyledCheckboxLabel = styled.label`
    font-size: .9rem;
    font-weight: 300;
    line-height: 1rem
`;

class Checkbox extends React.Component {

    constructor(props) {
        super(props);

        this.input = null;
    }

    handleChangeCheckboxState() {
        console.log(this.input);
    }

    render() {
        return (
            <InputGroup onClick={this.handleChangeCheckboxState}>
                <StyledInputWrapper color={this.props.color}>
                    <StyledCheckbox type="checkbox" ref={input => this.input = input} color={this.props.color} />
                    <StyledCheckMark color={this.props.color} />
                    <Ripple recenter={true} />
                </StyledInputWrapper>
                {this.props.label && <StyledCheckboxLabel>{this.props.label}</StyledCheckboxLabel>}
            </InputGroup>
        );
    }
}

export default Checkbox;
