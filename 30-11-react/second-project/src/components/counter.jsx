import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0,
        names:['nadav','tommy','adi','tommer']
    };

    style={
        fontSize:30
    }

    render() { 

        return (
        <div>
            <h1 style={this.style} className={this.changeBG()}>{this.formatCount()} </h1>
            <button className="btn btn-dark btn-sm">+</button>
            <ul>{ this.state.names.map( name => <li key={name} >{ name }</li>) } </ul>
        </div>);
    }

    changeBG() {
        let classes = "badge m-2 bg-"; //badge m-2 bg-success
        classes += (this.state.count === 0) ? 'warning' : 'success';
        return classes;
    }

    formatCount(){
        return this.state.count===0? 'Zero': this.state.count;
    }
}
 
export default Counter;