
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
  useLocation
} from "react-router-dom";

import { Home } from './components/Home';
import { AnimatedRoutes } from './components/AnimatedRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
