import React from 'react';
// import './contact.css'

const ContactsData = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
			<div className="col-md-6 col-lg-3 wow bounceInUp mb-5" key={movie.Poster} data-wow-duration="1.4s" style={{margin:10 ,height:'200px' ,width:"300px"}}>
            <div className="card ">
              <div className="card__header">
              <img  src={movie.Poster} alt='movie' className="card__image" width="600" />
              </div>
              <div className="card__body">
              <span className="tag tag-blue">Technology</span>
              <h4>What's new in 2022 Tech</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
              </div>
            </div>
           </div>
			))} 
		</>
	);
};

export default ContactsData ;