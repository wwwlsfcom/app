import React from "react";
import {Link} from "react-router-dom";

export default  class Clock extends React.Component<any, any> {
    private timerID;

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // this.setState({date: new Date()}); // 不行?
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date && this.state.date.toLocaleTimeString()}.</h2>
                <Link to="/cesium">cesium</Link>
            </div>
        );
    }
}