import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Register from './components/Register';
import  Status from './components/Status';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Success from './components/Success'

function App() {
  return (
    <div className="App">
     <h1>e-Grievance System</h1>
     {/* <Home></Home>
     <About></About>
     <Feedback></Feedback>
     <Register></Register>
     <Status></Status> */}

     <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/status" element={<Status />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<Success />} />
      </Routes>

     </div>
    </div>
  );
}

export default App;
