import React from 'react';


const Sidebar = ({username,allUsers,socket,setMessage,currentRoom,setCurrentRoom,welcome}) => {
    
    
   console.log(allUsers);
    return (
        <React.Fragment>
            <h1>{welcome}</h1>
        <div className='sidebar'>
            {allUsers.map(user=><button className='btn btn-lg btn-info m-2' 
            onClick={()=>{
                setCurrentRoom(user[0])}}
                >{user[0]}</button>)}
            
        </div>
        </React.Fragment>
    );
}

export default Sidebar;
