import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
    const [data, setdata] = useState({});
    const navigator = useNavigate()

   const handleSubmit = async (event)=>{
       event.preventDefault();        
       const result = await axios.post('http://localhost:3002/api/auth',data)
        localStorage.setItem('token',result.data)   
       navigator('/animals')
   }


 return (
   <div>
       <form className='m-4' onSubmit={handleSubmit}>
       <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control"
         onChange={(ev)=>setdata({...data,email:ev.target.value})} />
       </div>
       <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Password</label>
         <input type="password" class="form-control" 
         onChange={(ev)=>setdata({...data,password:ev.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
</form>
   </div>   
  )
}
