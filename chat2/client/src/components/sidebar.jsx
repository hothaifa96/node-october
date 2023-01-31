import React from 'react';

const Sidebar = (props) => {
    const {allUsers,username,setcurrenRoom}=props
    return (
        <div className='sidebar'>
            <h1>{username}</h1>
            {allUsers.map(user=>
            <button 
            className='btn btn-info m-1'  
            onClick={()=>setcurrenRoom(user[0])}
            >{user[0]}</button>)}
        </div>
    );
}

export default Sidebar;
