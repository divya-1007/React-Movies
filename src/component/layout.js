import { useEffect, useState } from 'react';
import { NavLink, Outlet} from 'react-router-dom';
import Login from './login';

const Layout = () => {
  return (
    <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
            <div className="container-fluid">
               <NavLink className="nav-link" to="/dashboard">
                    <h3 className="my-heading ">Movies</h3>
               </NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars mfa-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                              <NavLink className="nav-link" to="/"
                               style={({isActive})=>{return{color:isActive ?"green":''}}}
                              >LOGIN</NavLink>
                          </li> */}
                        

                        <li className="nav-item text-uppercase">
                             <NavLink className="nav-link" to="/dashboard"
                             style={({isActive})=>{return{color:isActive ?"green":''}}}
                             >Dashboard</NavLink>
                        </li>

                        <li className="nav-item text-uppercase">
                             <NavLink className="nav-link" to="/about"
                              style={({isActive})=>{return{color:isActive ?"green":''}}}
                             >CONTACT</NavLink>
                            {/* <a className="nav-link" href="/">HOME</a> */}
                        </li>
                        
                        <li className="nav-item text-uppercase">
                            <NavLink className="nav-link" to="/logUp"
                             style={({isActive})=>{return{color:isActive ?"green":''}}}
                            >LOgOut</NavLink>
                        </li>

                        <li className="nav-item text-uppercase">
                            <NavLink className="nav-link" to="/filter"
                             style={({isActive})=>{return{color:isActive ?"green":''}}}
                            >FILTER</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout;