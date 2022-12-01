import React , {Component} from 'react';

class Buttons extends Component {
    state = { 
        arr: ['hodi','hila','yahli','yarden','moris'],
        txt:'hello from the other side',
        c: 'btn btn-success'
     } 
    
    render() { 
        return (
            <div>
                { this.state.arr.map(name => <button key={this.state.arr.indexOf(name)} className={ this.getclasses(name) }  > { name } </button>
                  ) }
            </div>
        );
    }
    getclasses(name) {
        return "btn m-5 btn-" + (name.includes('a'))?'dark':'primary';
    }
}
 
export default Buttons;