import React, { Component } from 'react';
class Message extends Component {
    state = {
        names:['hodi'],
        withStyle:true
    } 


    render() { 
        return (
            <div className='m-4'>
               <input type="text" onKeyPress={(ev)=>this.keyPressHandle(ev)}
               />
               <input checked={this.state.withStyle} className='ms-4' type="checkbox" name="check" id="check" 
               onChange={this.changeStyle}/> 
               <label htmlFor="check"> WithStyle ?</label>
               <br />
               { this.state.names.map(name=> <button key={name} 
               className={ this.state.withStyle ? this.getclasses(name) : '' }  > {name} </button>) }

            </div>
        );
    }

    changeStyle=()=>{
        this.state.withStyle= !this.state.withStyle;
        this.setState({withStyle : this.state.withStyle })
    }
    keyPressHandle(ev){
        if(ev.key =='Enter'){
            this.state.names.push(ev.target.value);
            this.setState( {names: this.state.names } )
        }
    }
    getclasses(name) {
        return "btn m-1 btn-" + ((name.includes('a'))?'dark':'primary');
    }
}

 
 
export default Message;