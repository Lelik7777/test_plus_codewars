import React, {useEffect, useState} from 'react';

export function List4FuncComp() {
    const [count, setCount] = useState(0);
    const addCount = () => setCount(count + 1);
    useEffect(()=>{
       // document.title=`you click: ${count}`;
    });
    return <div>
        <p>you change count numbers {count} times</p>
        <button onClick={addCount}>click me</button>
    </div>
}
