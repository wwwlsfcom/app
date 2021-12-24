import React from "react";
import ReactDOM from "react-dom";
import "cesium/Widgets/widgets.css";
import {CesiumViewer} from "./CesiumViewer";


/*const name = 'Josh Perez';
const element = <h1>Hello,{name}</h1>;*/

function formatName(user: { firstName, lastName }): string {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

function getGreeting(user = null) {
    if (user) {
        return (
            <h1>
                Hello, {formatName(user)}!
            </h1>
        );
    }
    return <h1>Hello, Stranger.</h1>;
}

/*ReactDOM.render(
    getGreeting(user),
    document.getElementById("root")
);*/

/*function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/

/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}*/

class Welcome extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="张三"></Welcome>
                <Welcome name="王二"></Welcome>
                <Welcome name="历史"></Welcome>
            </div>
        );
    }
}

// @ts-ignore
/*
const element = <Welcome name="Liu sheng feng"/>;
ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/
class Clock extends React.Component<any, any> {
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
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date && this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <CesiumViewer/>,
    document.getElementById('root')
);