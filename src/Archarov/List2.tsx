import React from 'react';

type List2Type = {};
export const List2: React.FC<List2Type> = ({}) => {
    const [num, setNum] = React.useState<number[]>([1, 2, 3,4,5,6,7]);
    const refUl = React.useRef<HTMLUListElement|null>(null);

    function addNum() {
        setNum([...num, num[num.length - 1] + 1])
    }

    function showScroll() {
        console.log('scroll is');
    }


    function removeShowScroll() {
        console.log(refUl);
        refUl.current?.removeEventListener('scroll',showScroll);

    }
function start(){
        setTimeout
}
    React.useEffect(()=>{
        refUl.current?.addEventListener('scroll',showScroll);
    },[]);
    React.useEffect(()=>{
        console.log(refUl);
    },[num])


    return <div >
        <ul ref={refUl} style={{overflow: 'scroll', height: '100px'}}>
            {num.map((n, index) => <li key={index}>{n}</li>)}
        </ul>

        <button onClick={addNum}>addNum</button>
        <button onClick={removeShowScroll}>removeScroll</button>

    </div>
}