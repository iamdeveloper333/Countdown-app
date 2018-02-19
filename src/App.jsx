import React,{Component} from 'react';
import Clock from './Clock.jsx';
import './index.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            deadline :'January 1, 2019',
            newDeadline:''
        };
        this.changeDeadline = this.changeDeadline.bind(this);
    }
    changeDeadline(){
        this.setState({
             deadline :this.state.newDeadline
        });
    }
    render(){
        return(
            <div className="app-outer">
                <div className="headline">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <div><input onChange={event=>this.setState({newDeadline:event.target.value})} placeholder="  Write Your Date Here..." /></div>
                <div><button className="btn btn-info" onClick={this.changeDeadline}>Submit</button></div>
            </div>
        )
    }
}