import React from 'react';
import BookingData from '../page/Booking/BookingData';
import Footer from './Foooter';
import Layout from './layout';

const Booking = () => {
  return (
    <div>
      <Layout />
    <div className="Action2Movie">
      <div className="container-fluid">
        <div className="row align-items-center my-5">
          <div className="col-lg-12 mt-5">
          <BookingData />
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

export default Booking ;