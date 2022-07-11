import React from 'react';
import AnimationListData from '../page/Animation/AnimationList/AnimationListData';
import Layout from './layout';
 
function Contact (){
 return  (
  <>
  <Layout />
 <div className="contact ">
    <div className="Action2Movie mt-5">
      <div className="container-fluid mt-5">
        <div className="row align-items-center my-5 mt-5">
          <div className="col-lg-12 mt-5">
          <AnimationListData />
          </div>
          <div className="col-lg-5">
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
 )
}
 
export default Contact;