import React from 'react';

//use useReducer
const INCR = 'increment';
type ActionType = {
    type: typeof INCR;
};
const reducer = (state: number, action: ActionType):number => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        default:
            return state;
    }
};
type List7Type={};

export const List7:React.FC<List7Type>=({})=>{
    const [state,dispatch]=React.useReducer(reducer,0);
    React.useEffect(()=>{
       setInterval(()=>{
           dispatch({type:INCR});
       },1000)
    },[]);
    return <div>
        <h1>{state}</h1>
    </div>
};
