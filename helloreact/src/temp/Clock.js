import { Component } from "react";

/*
    1. Mount
    2. Update
    3. Unmount
*/

export default class Clock extends Component
{
  
    constructor(props){
        super(props);
        console.debug("Constructor Called");
        this.state = { time : new Date().toString()}
        this.firstLoadTime = new Date().toString();
    }

    componentDidMount(){
        console.debug("Component Mounted");
        setInterval(() => {
            this.setState({time : new Date().toString()});
        },1000);
    }

    render(){
        console.debug("Render Called");
        return(
            <div>
                <h1>{this.firstLoadTime}</h1>
                <h1><strong>Time : </strong>
                    {this.state.time}</h1>
            </div>
        )
    }

    componentDidUpdate(){
        console.debug("Component Updated");
    }

    componentWillUnmount(){
        console.debug("Component Unmounted");
    }
}