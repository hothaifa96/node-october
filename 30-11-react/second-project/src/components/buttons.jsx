import React , {Component} from 'react';

class Buttons extends Component {
    state = { 
        arr: [],
     } 
    
    render() { 
        return (
            <div>
                { this.state.arr.length === 0 && 'please enter a value'}
                { this.state.arr.map(name => <button key={this.state.arr.indexOf(name)} className={ this.getclasses(name) }  > { name } </button>) }
            </div>
        );
    }
    getclasses(name) {
        return "btn m-1 btn-" + ((name.includes('a'))?'dark':'primary');
    }
}
 
export default Buttons;