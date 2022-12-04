import React, { Component } from 'react';
import Counter from './counter';
import Message from './message';

class Counters extends Component {
    state = { 
        arr:[
            {id:1},
            {id:2},
            {id:3},
        ]
    } 
    render() { 
        return (
            <div>
                {this.state.arr.map(val => <Counter key={val.id} />)}

                <Message/>
            </div>
        );
    }
}
 
export default Counters ;