
import './App.css';
import ApiGetPoema from './components/ApiGetPoema';
import Navbar from './components/Navbar';
import { Poemas } from './components/Poemas';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Poemas />
    </div>
  );
}

export default App;
