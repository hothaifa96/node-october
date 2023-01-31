import React from 'react';
import  { useState,useEffect } from 'react';
import io from 'socket.io-client'
import Login from './login';
import '../App.css'
import Sidebar from './sidebar';
import Chat from './chat';
import Display from './display';

const socket = io.connect('http://localhost:4000')
const Main = () => {

    const [username, setusername] = useState('');
    const [allUsers, setallUsers] = useState([]);
    const [message, setmessage] = useState('');
    const [connected, setconnected] = useState(false);
    const [currenRoom, setcurrenRoom] = useState('');

    const getAllUsers= ()=> socket.on('new user',(users)=> setallUsers(users))
    const sendMessage =() => {
        let mes = {sender:username,to:currenRoom,content:message}
        socket.emit('send message',mes)
    }
    const getMessage=()=>{
        socket.on('new message',message => setmessage(message.content))
    }

    useEffect(() => {
        getMessage()
        getAllUsers()
    }, [socket]);

    let page;

    if(connected){
        page=<div>
            <Display message={message}></Display>
            <Chat
            setmessage={setmessage}
            sendMessage={sendMessage}
            ></Chat>
            <Sidebar 
            username={username}  
            allUsers={allUsers}
            setcurrenRoom={setcurrenRoom}
            ></Sidebar>
        </div>
    }
    else{
        page =<Login
        setusername={setusername}
        setconnected={setconnected}
        socket ={socket}
        username={username}
        ></Login>
    }

    return (
        <div className='App-header'>
            {page}
        </div>
    );
}

export default Main;
