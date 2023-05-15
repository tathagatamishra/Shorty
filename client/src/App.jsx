import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div><img src="logo.svg" alt="" /></div>
        <div>
          <h1>Link</h1>
          <h1>About</h1>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
