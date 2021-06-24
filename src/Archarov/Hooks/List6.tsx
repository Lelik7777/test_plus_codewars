import React from 'react';

//через useEffect and return с функцией очистки
type List6Type = {};
export const List6: React.FC<List6Type> = ({}) => {
    const [count, setCount] = React.useState<number>(0);
    const stop=()=>{

    }
    React.useEffect(() => {
        const idTime = setInterval(() => setCount(count + 1), 1000);
        return () => {
            console.log(count);
            clearInterval(idTime);
            console.log(`count after: ${count}`);
        }
    }, [count]);
    return <div>
        <h1>{count}</h1>
        <button>stop</button>
    </div>
};

