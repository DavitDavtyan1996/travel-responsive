import "./app.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    
    </div>
  );
}

export default App;
 