import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { Link } from 'react-router-dom';
class Footer extends React.Component
{
  render()
  {
    return (
      
      <footer>
			<div className="containers">
				<div className="row">
					{/* <div className="col-md-4">
						<div className="row margin">
							<div className="col-md-12">
								<p className='sataemail'><i className="fa fa-envelope"></i> movies.csd509j.net</p>
							</div>
						</div>
						<div className="row margin">
							<div className="col-md-12">
								<p className='sataemail'>&copy; Copyright 2018</p>
							</div>
						</div>
					</div> */}
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
							<p className='sataemail'>&copy; movies.csd509j.net</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
							<p className='sataemail'>&copy; Copyright 2018</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
							<a className="color" href="/">HOME</a>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
							<a className="color" href="/about">CONTACT</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
      
    )
  }
}
export default Footer;