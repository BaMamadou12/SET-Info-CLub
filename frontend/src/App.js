import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login  from './Pages/Auth/Login';
import Blogs from './Pages/blogs/Blogs';
import BlogList from './components/BlogList';
import SingleBlog from './Pages/blogs/SingleBlog';
import CreateBlog from './Pages/blogs/CreateBlog';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        {/* HEADERS */}
        <NavBar />
        
        <Routes>
          <Route path="/" Component={Home} />      
          <Route path="/login" Component={Login} />
          <Route path="/blogs" Component={Blogs}>
            <Route path='' Component={BlogList}/>
            <Route path=":id" Component={SingleBlog}/>
            <Route path="create" Component={CreateBlog}/>
          </ Route>      
        </Routes>
        
        {/* FOOTER */}
        <Footer />

      </Router>
    </>
  );
}



export default App;
