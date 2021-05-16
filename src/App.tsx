import React from 'react';
import './App.css';
import {User} from './onClick';

const manS = {
    title: 'specialist',
    man: {
        name: 'alex',
        age: 32,
    },
    lesson: [{title:'1'},{title: '2'}],
    food:['milk','bread'],
}

function App() {
    return (
        <div className="App">
            <User/>
           {/* <ManComponent man={manS.man} title={manS.title} lesson={manS.lesson} food={manS.food} />*/}
        </div>
    );
}

export default App;
