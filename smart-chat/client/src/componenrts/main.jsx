import React from 'react';
import '../App.css'
import { useState,useEffect } from 'react';
import io from 'socket.io-client';
import Login from './login';
import Chat from './chat';
import Sidebar from './sidebar';
import Display from './display';

const socket = io.connect("http://localhost:4000")
const Main= () => {

    const [username, setUsername] = useState("");
    const [allUsers, setUsers] = useState([]);
    const [currentRoom, setCurrentRoom] = useState('');
    const [message, setMessage] = useState([]);
    const [connected,setConnected] = useState(true)
    let x='';

    const getUsers= ()=> socket.on('new user',susers=>setUsers(Object.entries(susers)));
    const getMessage= ()=> socket.on('new message',mess=>setMessage([...message,mess.content]));
    const emitm =()=>{ 
        let mes ={sender:username,content:message,to:currentRoom}
        socket.emit(socket.emit('send message',mes))
    }

    useEffect(() => {
        getUsers()
        getMessage()
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
        page= 
        <div>
            <Display
            message={message}/>
            <Chat
            setUsername={setUsername}
            username={username}
            connected={connected}
            setConnected={setConnected}
            socket={socket}
            currentRoom={currentRoom}
            sendMessage={emitm}
            setMessage={setMessage}
            message={message}
        />
        <Sidebar
        allUsers={allUsers}
        socket={socket}
        setMessage={setMessage}
        username={username}
        setCurrentRoom={setCurrentRoom}
        welcome={x}
        />
        </div>
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
