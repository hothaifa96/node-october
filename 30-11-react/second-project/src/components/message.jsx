import React, { Component } from 'react';
class Message extends Component {
    state = {
        names:['hodi'],
        withStyle:true,
        type:'button'
    } 


    render() { 
        return (
            <div className='m-4'>
               <input type="text" onKeyPress={(ev)=>this.keyPressHandle(ev)}
               />
               <input checked={this.state.withStyle} className='ms-4' type="checkbox" name="check" id="check" 
               onChange={this.changeStyle}/> 
               <label htmlFor="check"> WithStyle ?</label> 
               <select name="typeo"  className='ms-3' onChange={(en)=>this.changeType(en)}>
                <option value="button"> button</option>
                <option value="h1"> h1</option>
                <option value="img">img</option>

               </select>
               <br />
               { this.state.names.map(name=> this.generateElement(name)) }

            </div>
        );
    }

    generateElement(name){
        switch(this.state.type){
        case 'button':
            return <button key={name} className={ this.state.withStyle ? this.getclasses(name) : '' }  > {name} </button>;
        case 'h1':
            return<h1 key={name} > {name} </h1>
        case 'img':
            return<img src="fjnasifksaajfa" alt={name} />
        }
    }


    changeType=(en)=>{
       this.state.type=en.target.value;
       console.log(this.state.type);
       this.setState({type: this.state.type});
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