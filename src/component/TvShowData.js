import React from 'react';
import TvShowListData from '../page/TvShow/TvShowList.js/TvShowListData';
import Footer from './Foooter';
import Layout from './layout';

const TvShowData = () => {
  return (
    <div>
      <Layout />
    <div className="Action2Movie mt-5">
      <div className="container-fluid">
        <div className="row align-items-center my-5">
          <div className="col-lg-12 mt-5">
          <TvShowListData />
          </div>
          <div className="col-lg-5">
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default TvShowData ;