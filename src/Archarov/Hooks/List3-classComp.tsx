import React from 'react';

export class List3ClassComp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
        };
    }
componentDidMount() {
        document.title=document.title=`you click: ${this.state.count}`;
}
componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    document.title=document.title=`you click: ${this.state.count}`;
}

    render() {
        const addCount=()=>this.setState({count:this.state.count+1});
        return <div>
            <p>you click number {this.state.count} times</p>
            <button onClick={addCount}>click me</button>
        </div>
    }
}
