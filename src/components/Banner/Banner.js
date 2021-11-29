import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Banner.css';


const Banner = () => {
    return (


        <div className='m-0 banner row '>

            <div className="d-flex text-light text-start col-md-6 justify-content-center align-items-center">
                <div>
                    <h4>Hello, my name is</h4>
                    <h1>Nurul Islam</h1>
                    <h3>I'm a MERN stack web developer</h3>
                    <a href="https://drive.google.com/file/d/1rUYtEXmbHWsr92770JRObLU9VZ67tZxn/view?usp=sharing" target="_blank" >Download Cv</a>
                </div>

            </div>

        </div>
    );
};

export default Banner;