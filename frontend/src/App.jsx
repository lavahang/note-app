import { Home } from "./pages/home"
import { Login } from "./pages/login"
import Signup from "./pages/signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>   
    </BrowserRouter>

    </>
  )
}

export default App
