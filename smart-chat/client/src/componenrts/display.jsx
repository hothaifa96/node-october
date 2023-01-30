import React from 'react';

const Display = (props) => {
    let {message}=props
    return (
        <div style={{background: 'white',width:'30vw',height:'50vh',color:'black'}}>
            {message.map(mes=><React.Fragment><h1>{mes}</h1><br/></React.Fragment>)}
        </div>
    );
}

export default Display;
