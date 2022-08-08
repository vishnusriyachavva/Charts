import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';
const Form = () => {
    const [name, setName] = useState('');
    const nav = useNavigate();
    const handle = () => {
        localStorage.setItem('name', name);
        nav('Graph')
     };
    return (
        <div>
            <center>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <div className="App"><br></br><br></br>
         <h2>Enter the name :</h2><br></br>
         <input
            placeholder="Name"
            value={name}
            className="form-control-lg"
            onChange={(e) => setName(e.target.value)}
         /></div>
         <br></br><br></br>
            <button onClick={handle} className="btn-dark">Submit</button></center>
        </div>
    );
};

export default Form;