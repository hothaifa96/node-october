import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        values:[
            {id:1,value:6},
            {id:2,value:0},
            {id:3,value:-3}
        ]
     } 

    render() { 
        return (
            <React.Fragment>
                {this.state.values.map(val => {
                    return <Counter key={val.id} id={val.id}  value={val.value} />
                })}
            </React.Fragment>
        );
    }
}
 
export default Counters;