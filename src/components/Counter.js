import React from "react";

function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
    const onChange = e =>{
        onSetDiff(parseInt(e.tatget.value, 10)); //10진수
        //문자를 숫자로 변환
    };
    
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;