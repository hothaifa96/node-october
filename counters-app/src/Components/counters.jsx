import div, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        values:[
            {id:1,value:1,name:'c1'},
            {id:2,value:1,name:'c2'},
            {id:3,value:1,name:'c3'}
        ]
     } 

     handleDelete=(id)=>{
        const values= this.state.values.filter(val=> val.id !==id)
        this.setState({values})
     }

    render() { 
        return (
            <div>
                {this.state.values.map(val =>(
                     <Counter 
                     key={val.id} 
                     id={val.id}  
                     value={val.value} 
                     delete={()=>this.handleDelete(val.id)}>
                        <div className="alert alert-primary">{val.name}</div>
                        <h3> hello </h3>
                     </Counter>
                    ))}
            </div>
        );
    }

   
    


}
 
export default Counters;