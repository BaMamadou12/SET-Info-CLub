import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Register from './Pages/Auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Routes>
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
