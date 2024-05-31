import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/movies' element={<Home/>}/>
          <Route path='/movie/:id' element={<SingleMovie/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
