import React from "react";
import Counter from '../components/Counter'
import {useSelector,useDispatch} from 'react-redux'
import {increase, decrease} from '../modules/counter'

//useSelector는 상태를 가져오는 것이고, useDistach는 디스패치, 즉 상태가 변화하면 액션을 발생시키는 것

function CounterContainer() {
    const {number} = useSelector(state => ({
        number:state.counter.number,
    }))
    const dispatch = useDispatch()
    const onIncrease = () =>dispatch(increase())
    const onDecrease = () =>dispatch(decrease())

    return(
        <Counter 
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />

    )
}

export default CounterContainer