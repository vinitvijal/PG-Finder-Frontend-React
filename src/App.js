
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/nancy/Homepage';
import Locationpage from './components/vinu/Locationpage';
import Maps from './components/vinu/Maps';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
