import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movie/:id' element={<SingleMovie/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
