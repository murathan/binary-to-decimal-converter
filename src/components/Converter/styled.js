import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 30px;
`;

const Span = styled.span`
    font-size: 33px;
    min-height: 44px;
`;

const Input = styled.input`
    margin-bottom: 30px;
    background-color: #c599c9;
    font-size: 20px;
    height: 30px;
    border: 2px solid black;
    border-radius: 10px;
    outline: none;
    padding-left: 5px;
`;

export {Wrapper, Form, Button, Span, Input}