import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { colors, theme } from '@utils';

const StyledInputWrapper = styled.div`
    position: relative;
    
    margin-top: .5em;
    padding: .25em;
`;


const StyledTextInput = styled.input`
    position: relative;
    z-index: 900;
    
    height: 42px;
    width: 100%;
    
    margin: 1px;
    padding: calc(.4em + 1px) calc(.65em + 1px);
    
    background-color: transparent;

    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
    
    border: 1px solid ${rgba(colors.gray, 0.5)};
    border-radius: ${theme.border_radius};

    outline: none;
    
    &:hover {
        border: 1px solid ${rgba(colors.gray, 0.75)};
    }
    
    &:focus {
        padding: .4em .65em;
        border: 2px solid ${colors.primary};
    }
`;

const StyledInputLabel = styled.label`
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    
    padding: 0 .5em;
    
    color: ${rgba(colors.gray, 0.5)};
    font-size: 1em;
    
    pointer-events: none;
    
    transform: translate(13px, 18px) scale(1);
    
    transition: transform .2s ease-in-out, font-size .2s ease-in-out, color ease-in-out;
    
    ${({focused, empty}) => (focused || !empty) && `
        background-color: ${colors.white};
        
        font-size: .65em;
    
        transform: translate(10px, 0) scale(.98);
    `}
    
    ${({focused}) => focused && `
        color: ${colors.primary};
    `}
`;

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.ref = null;

        this.state = {
            focused: false,
            empty: true
        }
    }

    handleFocus = () => {
        this.setState({focused: true});
    };

    handleBlur = () => {
        this.setState({focused: false});
    };

    handleUpdate = () => {
        const state = {
            empty: this.ref.value.length === 0
        };

        this.setState(state);
    };

    render() {
        return (
            <StyledInputWrapper>
                <StyledTextInput type="text" ref={input => this.ref = input} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleUpdate} />
                <StyledInputLabel focused={this.state.focused} empty={this.state.empty}>{this.props.label}</StyledInputLabel>
            </StyledInputWrapper>
        );
    }
}

export default TextInput;
