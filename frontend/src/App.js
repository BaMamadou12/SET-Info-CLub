import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login  from './Pages/Auth/Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />      
        </Routes>
        <Routes>
          <Route path="/login" Component={Login} />      
        </Routes>
    </Router>
  );
}

export default App;
