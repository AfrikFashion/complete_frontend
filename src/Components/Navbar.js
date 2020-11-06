import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div className="m-5">
                
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
                    <div className="container">
                    <Link className="navbar-brand" to="/">Afrik Fashion</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                        <li >
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signin">Sign In</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        
                         {/* <li className="nav-item">
                            <Link className="nav-link" to="/Readmore">Readmore</Link>
                        </li>
                         
                         <li className="nav-item">
                            <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                          */}
                        
                        </ul>
                        
                    </div>
                    </div>                    
                </nav>
               
               
            </div>
        )
    }
}

export default Navbar