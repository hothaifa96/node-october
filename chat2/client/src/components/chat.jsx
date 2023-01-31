import React from 'react';

const Chat = (props) => {
    const {setmessage, sendMessage} = props
    return (
        <div>
            <input 
            placeholder='message......' 
            onChange={e=>setmessage(e.target.value)} type="text" />
            <button 
            className='btn btn-success btn-lg'
            onClick={()=>sendMessage()}
            > SEND</button>
        </div>
    );
}

export default Chat;
