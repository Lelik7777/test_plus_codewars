import React from 'react';
import './App.css';
import {List7} from './Archarov/Hooks/List7';



function App() {
    //const [visible, setVisible] = useState<boolean>(true);

  /*  function hide() {
        setVisible(vis => !vis);
    }*/

    return <div style={{ margin: '20px',display:'flex'}}>
       {/* {visible && <List/>}*/}
         {/*<List2 title={'hello'}/>*/}
        {/*  <button onClick={hide}>toggle</button>*/}
       {/* <List3ClassComp/>
        <List4FuncComp/>*/}
       {/* <List5/>*/}
        <List7/>
    </div>

}

export default App;

