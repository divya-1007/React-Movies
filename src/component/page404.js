import React from "react";
import {NavLink} from "react-router-dom";
import Layout from "./layout"

function Page404 () {
    return(
        <div>
            <Layout />
            
            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                <div className="card">
                <div className="card__header">
                <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
                </div>
                <div className="card__body">
                <span className="tag tag-blue">Technology</span>
               <NavLink to="/" >GO TO HOME </NavLink>
                <h1>404 page</h1>
                </div>
            </div>
            </div>
        </div>
    )
}
export default  Page404 ;