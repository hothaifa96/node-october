import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
const Register = (props) => {
    const [data, setdata] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
       try{
        const result =await axios.post('http://127.0.0.1:3030/api/users',data)
        console.log(result)
        localStorage.setItem('token',result.headers['x-auth-token'])
        navigate('/movies')
    }
    catch(err){
        console.log(err);
    }

      }

    return (
        <form className='m-4' onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">name</label>
                <input type="text" onChange={(ev)=>setdata({...data,name:ev.target.value})}  />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" onChange={(ev)=>setdata({...data,email:ev.target.value} )}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"  onChange={(ev)=>setdata({...data,password:ev.target.value})}/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Register;
