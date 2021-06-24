import React from 'react';

//use call back in setState
//type List8Type = {};
export const List8: React.FC<{}> = ({}) => {
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(() => {

       setInterval(() => setCount((countPrev) => countPrev + 1), 1000);
    }, [])
    return <div>
        <h1>{count}</h1>

    </div>
};