import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import PrivateRoute from "./Components/PrivateRoute";
import Footer from "./Components/footer" ;

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen h-scree flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
