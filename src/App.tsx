
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Poemas } from './components/Poemas';
 import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
