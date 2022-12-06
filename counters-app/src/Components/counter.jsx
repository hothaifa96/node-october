import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:this.props.value,
    };

    render() { 
        console.log(this.props);
        return (
        <div>
            <span style={this.style} >{this.formatCount()} </span>
            <button  
            onClick={this.handleIncrement}
             className="btn btn-dark btn-sm"
             > + </button>
             <label >{this.props.id}</label>

        </div>);
    }


    handleIncrement=()=>{
        this.setState( {count: this.state.count +1} );
    }
    formatCount(){
        return this.state.count===0? 'Zero': this.state.count;
    }
}
 
export default Counter;