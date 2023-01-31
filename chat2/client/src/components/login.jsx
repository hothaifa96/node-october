import React from 'react';

const Login = (props) => {
    const {setconnected,setusername,socket,username} =props

    return (
        <div>
            <input onChange={e=>setusername(e.target.value)} required className='margen' type="text" />
            <button className='btn btn-info send'
            onClick={()=>{
                console.log(username)
                setconnected(true)
                socket.emit('join server',username)
            }} > Join </button>
        </div>
    );
}

export default Login;
