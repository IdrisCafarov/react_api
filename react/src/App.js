import "./App.css";
import Homepage from "./views/Homepage";
import Contact from "./views/Contact";
import { Routes, Route } from "react-router-dom";
import Galery from "./views/Galery";
import About from "./views/About";
import Details from "./components/Details";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/galery/:id" element={<Details />} />
        <Route path="/upload" element={<Modal />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
