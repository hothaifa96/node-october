import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from './counters';

class App extends Component {
    state = { 
        objects:[
            {id:1,value:0,name:'c1'},
            {id:2,value:0,name:'c2'},
            {id:3,value:1,name:'c3'}
        ]
     } 
    render() { 
        return (
            <React.Fragment>
                <NavBar 
                len={this.state.objects.length} 
                amount={ this.state.objects.reduce((sum,object)=> sum+object.value ,0)}
                />
                <Counters 
                myObjects={this.state.objects} 
                myDelete={(id)=>this.handleDelete(id)}
                myIncrement={(value)=>this.handleIncrement(value)}/>
            </React.Fragment>
        );
    }
    handleIncrement=(value)=>{
        const objects = [...this.state.objects]
        let index=this.state.objects.indexOf(value)
        objects[index].value++;

        this.setState({objects})
        
        // this.setState( {count: this.state.count +1} );
    }
    handleDelete=(id)=>{
       const objects= this.state.objects.filter(val=> val.id !==id)
       this.setState({objects})
    
    
    
    }
}
 
export default App;