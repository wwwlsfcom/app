import React from "react";

export class Clock extends React.Component<any, any> {
    private timerID: NodeJS.Timer;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick('date'), 1000);
    }

    private tick(name) {
        this.setState({[name]: new Date()});
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}