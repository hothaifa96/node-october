import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';

function App() {

  const [server1, setserver1] = useState('1');
  const [server2, setserver2] = useState('2');
  let  s1 = async()=>{ 
    let x = await axios.get('http://localhost:4001/')
    console.log(x.data)
    setserver1(x.data)
  }
   let s2 = async()=>{ 
    let x = await axios.get('http://localhost:4002/')
    console.log(x.data)
    setserver2(x.data)
  }

   useEffect(() => {
     s1()
     s2()
},);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <h1>{server1}</h1>
      <h1>{server2}</h1>
    </div>
  );
}

export default App;
