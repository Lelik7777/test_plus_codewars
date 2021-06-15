import React from 'react';

//через ref
export const List5: React.FC<any> = ({}) => {
    const initCount = 0;
    const [count, setCount] = React.useState<number>(initCount);
    const refCount = React.useRef<number>(initCount);
    const refIdTime=React.useRef<any>(null);
    React.useEffect(() => {
        refCount.current = count;
    });
    const start = () => {
        console.log(refCount.current);
        refIdTime.current = setInterval(() => setCount(refCount.current + 1), 1000);
    };
    React.useEffect(() => {

    }, []);
    const stop = () => {
        console.log();
        clearInterval(refIdTime.current);
    }
    return <div>
        <h1>{count}</h1>
        <p>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </p>
    </div>
}
