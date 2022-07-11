import {useSearchParams ,NavLink ,useNavigate} from "react-router-dom";
import Footer from "./Foooter";
import Layout from "./layout";


function Filter (){
const navigate = useNavigate()
 const [searchParams, setSearchParams]= useSearchParams()
console.warn(searchParams)
const age = searchParams.get('age')
const city = searchParams.get('city')
const toNav = ()=>{
  const x = false;
  if(x){
     navigate('/about')
  }else{
    navigate('/contact')
  }
}
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
        <h1>Filter page</h1>
        <p> Age is : {age}</p>
        <p> city is : {city}</p>
        <input onClick={(e)=>setSearchParams({text:e.target.value})}></input>
        <button onClick={()=>setSearchParams({age:20})}>Set params Data</button>
        <br />
        
        <button onClick={()=> toNav()}>Go to About page</button>
        <br />
        <button onClick={()=>navigate('/contact')}>Go to contact page</button>
        </div>
    </div>
    </div>
    <Footer />
</div>

)
}
export default Filter;