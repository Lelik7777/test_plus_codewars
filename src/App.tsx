import React, {useState} from 'react';
import './App.css';
import {List} from './Archarov/List';
import {List2} from './Archarov/List2';


function App() {
    const [visible, setVisible] = useState<boolean>(true);

    function hide() {
        setVisible(vis => !vis);
    }

    return <div style={{overflow: 'scroll'}}>
        {visible && <List/>}
        {visible&&<List2/>}
        <button onClick={hide}>toggle</button>

    </div>

}

export default App;
