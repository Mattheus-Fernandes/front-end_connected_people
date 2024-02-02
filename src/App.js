import './App.css';

//Components
import Navbar from './component/Navbar/Navbar';

//Pages
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Home from './pages/Home/Home';

//Router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//Hook
import { useAuth } from './hooks/useAuth';


function App() {

  const {auth, loading} = useAuth()
  
  if(loading){
    return <h1>Carregando...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={Home}/>
          <Route path='/login' element={!auth ? <Login /> : <Navigate to="/" />} />
          <Route path='/register' element={!auth ? <Register /> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
