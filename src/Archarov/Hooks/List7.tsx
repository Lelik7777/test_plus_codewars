import React from 'react';

const INCREM = 'increment';
type ActionType = {
    type: typeof INCREM;
}
const reducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        default:
            return state;
    }
}
type List7Type = {};
export const List7: React.FC<List7Type> = ({}) => {
    const [state, dispatch] = React.useReducer(reducer, 0);
    React.useEffect(()=>{
        setInterval(()=>{
            dispatch({type:INCREM});
        },1000)
    },[])
    return <div>
        <h1>{state}</h1>
    </div>
}