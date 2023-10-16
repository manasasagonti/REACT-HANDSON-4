import React , {Component} from "react";
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import Student from './Student';
import './style.css';
import StudentForm from "./StudentForm";
import EditForm from "./EditForm";
function RouteCompo(){
    return(
        <>
        <BrowserRouter >
        <div className="parent">
        <Link to= '/' className="navbar" >Home  </Link>
        <Link to = '/student' className="navbar">Student </Link>
        <Link to = '/contact' className="navbar">Contact</Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/student' element={<Student />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/student-desc' element={<StudentForm />}></Route>
            <Route path='/student-desc/:ID' element={<EditForm />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteCompo