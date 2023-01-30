import React from 'react';

const Chat=(props) => {

    let {message,currentRoom,username,sendMessage,setMessage} = props
    let send =(e)=>{
        sendMessage()
    }
    return (
        <div>
            {message}
            <br />
            <input type="text" placeholder='message' onChange={(e)=>setMessage([...message,e.target.value])}/>
            <button className='btn btn-dark btn-lg' onClick={()=>send()}> Send </button>
        </div>
    );
}

export default Chat;
