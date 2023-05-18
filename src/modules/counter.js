const SET_DIFF='counter/SET_DIFF'; 
const INCREASE='counter/INCREASE'
const DECREASE='counter/DECRAESE'

//액션 생성 함수
export const setDiff = diff =>({type:SET_DIFF, diff})
export const increase = () =>({type:INCREASE})
export const decrease = () =>({type:DECREASE})
//초기 상태 생성
const initialState = {
    number:0,
    diff:1
}
//리듀서 생성, 액션 타입에 따라 상태를 다르게 업데이트 할 것
export default function counter(state=initialState, action){
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number+state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number = state.diff
            };
        default: 
            return state;
    }
}