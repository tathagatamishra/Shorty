import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (<div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
