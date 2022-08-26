
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <NavBar/>
    <Routes >
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
