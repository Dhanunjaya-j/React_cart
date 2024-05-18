import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Ascets/Images/logo-white.png';
import '../Ascets/CSS/Navbar.css'

function Navbar() {
    return (
        <nav >
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid d-flex ">                 
                    <Link to='/Home' className="navbar-brand ps-5 ms-5"><img src={Image} alt="#" /></Link>
                  </div>  
                    <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navcontent'>
                            <li className="nav-item me-5">                               
                                <Link to='/Home' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item me-5">                             
                                <Link to='/cart' className="nav-link active">Cart</Link>
                            </li>
                            <li className="nav-item ">                                
                             <Link to='/Product' className="nav-link active">Product</Link>
                            </li>
                        </ul>
                        <form className="d-flex pe-5 me-5" role="search">
                            {/* <button className="btn btn-outline-success m-2" type="submit">Logout</button> */}
                        </form>
                    </div>
                
            </nav>
        </nav>
    )
}
export default Navbar