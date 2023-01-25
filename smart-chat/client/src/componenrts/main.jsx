import React from 'react';
import '../App.css'
import { useState,useEffect } from 'react';
import io from 'socket.io-client';
import Login from './login';
import Chat from './chat';

const Main= () => {
    const socket = io.connect("http://localhost:4000")

    const [username, setUsername] = useState("");
    const [allUsers, setUsers] = useState([]);
    const [currentRoom, setCurrentRoom] = useState('all');
    const [message, setMessage] = useState('');
    const [connected,setConnected] = useState(true)

    const getUsers= ()=> socket.on('new user',susers=>setUsers(susers));

    useEffect(() => {
        getUsers()
        console.log(allUsers);
    }, [socket]);
    let page;
    if(connected)
    {
        page =<Login 
            // message ={message}
            // setMessage={setMessage} 
            setUsername={setUsername}
            username={username}
            connected={connected}
            setConnected={setConnected}
            socket={socket}
            
            ></Login>
    }
    else{
        page= <Chat>
            setUsername={setUsername}
            username={username}
            connected={connected}
            setConnected={setConnected}
            socket={socket}
        </Chat>
    }
    return ( 
        <div className='App-header'>
            <h1 className='h'>{username}</h1>
            {/* <h1 className=''>{socket}</h1> */}
            {page}
        </div>
     );

}
 
export default Main;
