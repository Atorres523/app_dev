import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Game from './game/main'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <div className="game-container">
          <Game />
        </div> */}
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
