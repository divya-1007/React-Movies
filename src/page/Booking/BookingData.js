import React from "react";
import '../../card.css'

const BookingData = () => {
  return (
    <>
        <div className="jumbotrons mt-5">
          <div className="container-fluid mb-5">
            <h1>
              Fame Cinema Official Ticketing 
            </h1>
            <div className="contenedor">
              <div className="row">
                <div className="col-md-6 col-lg-3  bounceInUp">
                  <div className="card">
                  <span className="tag tag-blue text-uppercase">Technology</span>
                    <div className="card__header">
                      <img
                        src="https://source.unsplash.com/600x400/?computer"
                        alt="card__image"
                        className="card__image"
                        width="600"
                      />
                    </div>
                    <div className="card__body">
                    <form ng-submit="bController.nextStep()">
                        <div className="jumbotron-input">
                            <div className="input-field">
                            <i className="fa fa-user" style={{color:"#000"}}></i>
                            <input type="text" name="usuario" autoComplete="username" placeholder="Username" required="yes"/>
                          </div>
                         < div className="input-field">
                          <i className="fa fa-lock" style={{color:"#000"}}></i>
                          <input type="number" name="number" autoComplete="number" placeholder="Number"  required="yes"/>
                          <i className="fa fa-number" id="togglePassword" style={{cursor:"pointer" ,color:"#000"}}></i>
                        </div>
                        </div>
                        <input type="submit" value="Sign in" className="btns solid mr-5"/>
                      </form>
                     
                      <h4 className="mt-5 text-uppercase"> Wonder Woman</h4>
                      <p className="detail-info">
                      Wonder Woman An Amazon princess comes to the world of Man to become the
                      n 1918, Diana, now a young woman, rescues US pilot Captain Steve Trevor when his plane crashes off the Themysciran coast.
                       The island is soon invaded by German soldiers, who had been pursuing Steve. The Amazons wipe out the German landing
                        force at the expense of heavy losses, with Antiope sacrificing herself to save Diana. Steve is interrogated with the Lasso
                         of Hestia and reveals that a great war is consuming the outside world and that he is an Allied spy.
                          He has stolen a notebook from the Germans' chief chemist, Dr. Isabel Maru, who is attempting to engineer a deadlier form of 
                          mustard gas under the orders of General Erich Ludendorff. Believing Ares to be responsible for the war, 
                          Diana arms herself with the "god-killer" sword,
                       the lasso and armor before leaving Themyscira with Steve to locate and stop Ares for goo
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Data Details */}
          <div className="container-fluid mt-5 mb-5">
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid ">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    // data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="">
                    Fame Cinema
                  </a>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                ></div>
              </div>
            </nav>

            <div className="row">
              <div className="col-md-9">
                <div className="tile-group" ng-show="bController.showCategories">
                  <span ng-repeat="seat in bController.seats">
                    <div
                      ng-className="{selected:seat.reserved, old:seat.old}"
                      ng-click="bController.select(seat.name)"
                    >
                      <a href="#" className="tile-group-item">
                        {/* {{seat.name}} */}
                      </a>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "0",
                      }}
                      // ng-if="seat.newLine"
                    ></div>
                  </span>
                </div>
              </div>
              <div className="col-md-3 mt-5" ng-show="bController.showCategories">
                <table className="table table-bordered legend">
                  <tr>
                    <td style={{ background: "red" }}></td>
                    <td>Reserved</td>
                  </tr>
                  <tr>
                    <td style={{ background: "#563d7c" }}></td>
                    <td>Selected</td>
                  </tr>
                  <tr>
                    <td style={{ background: "#f9f9f9" }}></td>
                    <td>Empty</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <fieldset ng-show="bController.showReservationList()">
                  <legend>Reservations</legend>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th># of Seats</th>
                        <th>Seat Nos.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr ng-repeat="seat in bController.persistedSelections">
                        <th scope="row">{$index+1}</th>
                        <td>{seat.name}</td>
                        <td>{seat.count}</td>
                        <td>
                            <span class="selected" ng-repeat="s in seat.seats">{{s}}</span>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

    
    </>
  );
};

export default BookingData;
