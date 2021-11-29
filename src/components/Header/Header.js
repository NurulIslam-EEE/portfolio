import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/IMG_20210218_172331(2).jpg';

const Header = () => {
    return (
        <div className='pt-3 ps-5 pe-5 d-flex justify-content-between header'>
            <div>
                <h1>Nurul Islam</h1>
            </div>
            <div>

                <button className="btn btn-primary text-end " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-bars"></i></button>

                <div className="offcanvas offcanvas-end nav-menu" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Menu</h5>
                        <button type="button" className="text-info btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <div >
                            <img className='profile' src={logo} alt="" />
                        </div>
                        <Link to='/home'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contract'>Contract</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;