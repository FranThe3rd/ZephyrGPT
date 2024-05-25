import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Discover from './pages/discover/discover';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover/>} />
        </Routes>
      </HashRouter>

      
    </div>
  );
}

export default App;
