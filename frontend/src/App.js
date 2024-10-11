import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />      
        </Routes>
    </Router>
  );
}

export default App;
