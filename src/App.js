import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
