import React from "react";
import styled from "styled-components"

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 3rem;
    width: 5rem;
    font-size: 2rem;

    /* 색상 */
    background: #f7a0cb;
    &:hover {
        background: #fccbe4;
    }
    &:active {
        background: #f58abe;
    }

    /* 기타 */
    & + & {
        margin-left: 1rem;
}
`


function Button({children, ...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}
export default Button;