import React, { Component } from 'react';

import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import './team.css';

const Profile = function Profile(props) {
  return <div className="profile text-center">{props.name}</div>;
};

export default class Team extends Component {
  render() {
    return (
      <div className="team-section pt-3 pb-5">
        <div className="container text-center text-white">
          <div className="title"> TEAM </div>
          <div className="teamDescription">
            Nothing beats a strong team which allows all members to contribute
            to the best of their ability. You can learn more about each member
            here. Feel free to get in touch if you are interested in
            contributing yourself
          </div>
        </div>
        <div className="members container-fluid mt-5">
          <div
            id="carouselExample"
            className="carousel slide"
            data-ride="carousel"
            data-interval="9000"
          >
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
              <div className="carousel-item col-md-4 active">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
              <div className="carousel-item col-md-4">
                <Profile name="Henning" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExample"
              role="button"
              data-slide="prev"
            >
              <FaArrowLeft color="blue" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-faded"
              href="#carouselExample"
              role="button"
              data-slide="next"
            >
              <FaArrowRight color="blue" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
