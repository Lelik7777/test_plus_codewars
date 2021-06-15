import React from 'react';

//functional component
type ListType = {};
export const List: React.FC<ListType> = ({}) => {
    const [state, setState] = React.useState([1, 3, 5, 7]);

    function addNum() {
        let randomNum = Math.round(Math.random() * 10);
        setState([...state, randomNum]);
    }

    React.useEffect(() => {
        console.log('component exist');
        return () => {
            console.log('component died');
        }
    }, []);
    React.useEffect(() => {
        console.log(state)
    }, [state]);
    const onStyle = {
        borderBottom: '1px solid black',
        width: '200px',
    }
    return <div>
        <ul>
            {state.map(((s,index) => <li key={index} style={onStyle}>{s}</li>))}
        </ul>
        <button onClick={addNum}>add</button>
    </div>
};

//class component
/*
export class List extends React.Component<any, any> {
    state = {
        numbers: [1, 3, 4],
    }
    addNum = () => {
        let newNum = Math.round(Math.random() * 10);
        this.setState({numbers: [...this.state.numbers, newNum]});
    }

    componentDidMount() {
        console.log('component exist');
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('component update');
    }

    componentWillUnmount() {
        console.log('component died');
    }

    render() {
        return <div>
            <ul>
                {this.state.numbers.map(s => <li>{s}</li>)}
            </ul>
            <button onClick={this.addNum}>add</button>
        </div>
    }
}*/

