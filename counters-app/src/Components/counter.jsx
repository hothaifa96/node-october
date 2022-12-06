import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:this.props.value
    };

    render() { 
        console.log(this.props);
        return (
        <div>
            {this.props.children}
            <span className='m5' style={this.style} >{this.formatCount()} </span>
            <button  
            onClick={this.handleIncrement}
             className="btn btn-success btn-sm"
             > + </button>
            <button onClick={this.props.delete} className="btn btn-danger m-2 btn-sm">Delete</button>

        </div>);
    }

    handleDelete(){

    }

    handleIncrement=()=>{
        this.setState( {count: this.state.count +1} );
    }
    formatCount(){
        return this.state.count===0? 'Zero': this.state.count;
    }
}
 
export default Counter;