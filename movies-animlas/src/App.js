import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import NavBar from './components/navBar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Movies from './components/movies';

function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path="/animal" element={<Main />}/>
        <Route path="/addanimal" element={<Main />}/>
        <Route path="/addmovie" element={<Main />}/>
        <Route path='/movies' element={<Movies/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
