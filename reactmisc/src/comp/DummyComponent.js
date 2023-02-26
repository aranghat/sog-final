import { Component, PureComponent } from 'react';

export default class DummyComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { counter : 0 };
    }

    /*shouldComponentUpdate(nextState, nextState) {
        if(nextState.counter > 5)
        {
            console.debug("Update the component");
            return true;
        }
        else
        {
            console.debug("Do not update the component");
        }
    }*/

    componentDidMount() {
        console.debug("DummyComponent mounted");
    }

    componentDidUpdate() {
        console.debug("DummyComponent updated");
    }


    handleClick = () => {
        console.log("Button clicled");
        this.setState({counter : (this.state.counter + 1)});
    }

    render() {
        return (
            <div>
               <h1>{this.props.counter}</h1>
            </div>
        );
    }
}