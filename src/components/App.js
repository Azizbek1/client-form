import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from './layouts/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import About from './about/About';
import Contact from './contact/Contact';
import Login from './form/Login';
import Register from './form/Register';
import Blog from './blog/Blog';
import Adminmain from './admin/adminMain';
const App = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
        <Navbar/>
        <div className="container">
          <Routes>
             <Route path="/" element={<Main />} />
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/register" element={<Register/>} />
             <Route path="/blog" element={<Blog/>} />
             {user && 
                <Route path="/admin" exact element={<Adminmain />} 
             />}
             <Route path="/admin" element={<Navigate to='/login' replace/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
