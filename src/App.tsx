
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Poemario from './components/Poemario';
import Navbar from './components/Navbar';
import { Poemas } from './components/Poemas';
 import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './components/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poemario" element={<Poemario/>} />
          <Route path="/sobremi" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
