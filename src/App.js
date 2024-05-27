import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Discover from './pages/discover/discover';
import Libraries from './pages/libraries/libraries';
import Chatbot from './pages/chatbot/chatbot';

function App() {

  return (
    <div className="App">
      
      <HashRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover/>} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/chatbot" element={<Chatbot />} />

        </Routes>
      </HashRouter>

      
    </div>
  );
}

export default App;
