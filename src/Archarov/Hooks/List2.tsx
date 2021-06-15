import React from 'react';
import '../../App.css';


type List2Type = { title: string }
export const List2: React.FC<List2Type> = ({title}) => {
    const ulRef = React.useRef<HTMLUListElement>(null);

     const timerRef = React.useRef<any>(null);

    const [state, setState] = React.useState<number[]>([1, 2, 3]);
    const addNum = () => {
        setState((state) => [...state, state[state.length - 1] + 1]);
    }

    const handlerScroll = () => {
        console.log('scroll');
    }
    React.useEffect(() => {
        console.log(state)
    });
    React.useEffect(() => {
        ulRef.current?.addEventListener('scroll', handlerScroll);
        // console.log(`ulRef=${ulRef}`);
        // console.log(`ulRef.current=${ulRef.current}`);
    }, []);
    const removeScroll = () => {
        ulRef.current?.removeEventListener('scroll', handlerScroll);
    };
    const start = () => {
        debugger

        timerRef.current = setInterval(addNum, 1000);
        console.log(typeof timerRef.current)
    };
    const stop = () => {
        console.log(timerRef.current)
        clearInterval(timerRef.current);
    };
    return <div className={'list'}>
        <ul style={{width: '300px', height: '100px', overflow: 'scroll'}} ref={ulRef}>
            {state.map((s, index) => <li key={index}>{s}
                <hr/>
            </li>)}
        </ul>
        <p>
            <button onClick={addNum}>addNum</button>
        </p>
        <p>
            <button onClick={removeScroll}> don`t see scroll</button>
        </p>
        <p>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </p>
    </div>
}