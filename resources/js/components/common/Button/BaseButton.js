import styled from 'styled-components';

const BaseButton = styled.button`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    color: inherit;

    letter-spacing: 0.02857em;
    text-transform: uppercase;
    text-decoration: none;
    vertical-align: middle;

    background-color: transparent;

    outline: none;
    border: 0;
    border-radius: 0;

    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        text-decoration: none;
    }
`;

export default BaseButton;
