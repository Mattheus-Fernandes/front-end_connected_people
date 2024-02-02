import './App.css';

//Components
import Navbar from './component/Navbar/Navbar';

//Pages
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

//Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
