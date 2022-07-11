import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Foooter'
import Layout from './layout'
import '../card.css'

const MoviesListDataInfo = (props) => {
    // console.log(props.moviesdata ,"jf");
  return (
    <>
    <Layout />
      <div className="about mt5 mb-5">
      <div className="container-fluid mt-5">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <div className='container-fluid movie-app '>
            <div className='row mt-5 p-5' >
            <div className="card mb-5" style={{width: "150rem" ,height: '1800px'}}>
            <h1 className='mt-5' style={{color:"#000"}}>Information</h1>
            <img src="https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" className="img-fluid" alt="movie" style={{width: "150rem" ,height: '597px', padding: '3px 134px'}}  />
            <div className="card-body">
                <h5 className="card-title">Star Wars</h5>
                <p className=" mt-3">The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away",[5] in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology.[6][7][8] The planets range from wealthy, planet-wide cities to deserts scarcely populated by primitive tribes. Virtually any Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet which, in most cases, teem with sentient and non-sentient alien life.[9] The franchise also makes use of other astronomical objects such as asteroid fields and nebulae.[10][11] Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, holographic projections, and HoloNet (internet counterpart).

The universe of Star Wars is generally similar to ours but its laws of physics are less strict allowing for more imaginative stories.[12] One result of that is a mystical power known as the Force which is described in the original film as "an energy field created by all living things ... [that] binds the galaxy together".[13] The field is depicted as a kind of pantheistic god.[14] Through training and meditation, those whom "the Force is strong with" are able to perform various superpowers (such as telekinesis, precognition, telepathy, and manipulation of physical energy).[15] It is believed nothing is impossible for the Force.[16] The mentioned powers are wielded by two major knightly orders at conflict with each other: the Jedi, peacekeepers of the Galactic Republic who act on the light side of the Force through non-attachment and arbitration, and the Sith, who use the dark side by manipulating fear and aggression. While Jedi Knights can be numerous, the Dark Lords of the Sith (or 'Darths') are intended to be limited to two: a master and their apprentice.[17]

Force-wielders are very limited in numbers in comparison to the population. The Jedi and Sith prefer the use of a weapon called a lightsaber, a blade of plasma that can cut through virtually any surface and deflect energy bolts. The rest of the population, as well as renegades and soldiers, use plasma-powered blaster firearms. As a result of galaxy-scaled politics, all this weaponry is made use of in various military conflicts during which most Star Wars material takes place. In the outer reaches of the galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty hunters are often employed by both gangsters and governments. Illicit activities include smuggling and slavery.

Planets allowing for countless settings and incredible life variety, technology on various advancement levels, and fantasy elements make Star Wars a very universal franchise. Virtually every genre and type of story can be adapted to fit into the franchise</p>
                <Link to='/dashboard' className="btn btn-primary">Go to Movies List</Link>
            </div>
            </div>
            {/* <div className='image-container d-flex justify-content-start col-sm-3 ' >
            <img src="https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" alt="movie"  />
            <h5 class="card-title ml-5">Star Wars</h5>
            <p class=" mt-3">The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away",[5] in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology.[6][7][8] The planets range from wealthy, planet-wide cities to deserts scarcely populated by primitive tribes. Virtually any Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet which, in most cases, teem with sentient and non-sentient alien life.[9] The franchise also makes use of other astronomical objects such as asteroid fields and nebulae.[10][11] Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, holographic projections, and HoloNet (internet counterpart).

            The universe of Star Wars is generally similar to ours but its laws of physics are less strict allowing for more imaginative stories.[12] One result of that is a mystical power known as the Force which is described in the original film as "an energy field created by all living things ... [that] binds the galaxy together".[13] The field is depicted as a kind of pantheistic god.[14] Through training and meditation, those whom "the Force is strong with" are able to perform various superpowers (such as telekinesis, precognition, telepathy, and manipulation of physical energy).[15] It is believed nothing is impossible for the Force.[16] The mentioned powers are wielded by two major knightly orders at conflict with each other: the Jedi, peacekeepers of the Galactic Republic who act on the light side of the Force through non-attachment and arbitration, and the Sith, who use the dark side by manipulating fear and aggression. While Jedi Knights can be numerous, the Dark Lords of the Sith (or 'Darths') are intended to be limited to two: a master and their apprentice.[17]

         Force-wielders are very limited in numbers in comparison to the population. The Jedi and Sith prefer the use of a weapon called a lightsaber, a blade of plasma that can cut through virtually any surface and deflect energy bolts. The rest of the population, as well as renegades and soldiers, use plasma-powered blaster firearms. As a result of galaxy-scaled politics, all this weaponry is made use of in various military conflicts during which most Star Wars material takes place. In the outer reaches of the galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty hunters are often employed by both gangsters and governments. Illicit activities include smuggling and slavery.

         Planets allowing for countless settings and incredible life variety, technology on various advancement levels, and fantasy elements make Star Wars a very universal franchise. Virtually every genre and type of story can be adapted to fit into the franchise</p>
           
            </div>  */}
              
            </div>
          </div>
          </div>
          <div className="col-lg-5">
            {/* <h1 class="font-weight-light">About</h1> */}
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
            {/* <NavLink to="/user/divya" >Divya</NavLink>
            <NavLink to="/user/damini" >Damini</NavLink> */}
            {/* <button onClick={()=>navigate('/about')}>Go to About page</button> */}
            
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default MoviesListDataInfo