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
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-1">
								
								<Link to="/"><i className="fa fa-pinterest"></i></Link>
							</div>
							<div className="col-md-1">
								<Link to="/"><i className="fa fa-instagram"></i></Link>
							</div>
							<div className="col-md-1">
								<Link to="/"><i className="fa fa-spotify"></i></Link>
							</div>
							<div className="col-md-1">
								<Link to="/"><i className="fa fa-tumblr"></i></Link>
							</div>
							<div className="col-md-1">
								<Link to="/"><i className="fa fa-twitter"></i></Link>
							</div>
						</div>
						{/* <div className="row margin">
							<div className="col-md-12">
								<p className='sataemail'><i className="fa fa-envelope"></i> movies.csd509j.net</p>
							</div>
						</div>
						<div className="row margin">
							<div className="col-md-12">
								<p className='sataemail'>&copy; Copyright 2018</p>
							</div>
						</div> */}
					</div>
					<div className="col-md-3 mt-4">
						<div className="row">
							<div className="col-md-12">
							<p className='sataemail'><i className="fa fa-envelope"></i> movies.csd509j.net</p>
							<p className='sataemail'>&copy; Copyright 2018</p>
							</div>
						</div>
					</div>
					

					<div className="col-md-4 dataStore">
						<div className="container-fluid">
						<div id="check-this-out-box">
							<div className="row">
								<div className="col-md-12">
									<h2>Movies</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<p>This personal review blog is filled with all my favoites. I hope you find something worth enjoying.</p>
								</div>
							</div>
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