import React from "react";
import styled from 'styled-components';
import Button from './Button';

const AppBlock = styled.div`
`;

function Counter({number,onIncrease, onDecrease, onSetDiff}) {
    const onChange = e =>{
        onSetDiff(parseInt(e.tatget.value, 10)); //10진수
        //문자를 숫자로 변환
    };
    
    return (
        <div>
            <h1>{number}</h1>
            <AppBlock>
                <Button onClick={onIncrease}>+</Button>
                <Button onClick={onDecrease}>-</Button>
            </AppBlock>
        </div>
    )
}

export default Counter;