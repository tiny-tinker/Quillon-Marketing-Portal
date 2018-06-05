import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import './journey.css';
import journeyRightCloud from './images/journeyRightCloud.png';

export default class Journey extends Component {
  render() {
    return (
      <div className="journey-section pt-4">
        <div className="container text-center text-white">
          <div className="title mt-3 mb-3">
            your cryptocurrency
            <br />
            journey, begins in 2018
          </div>
        </div>
        <div className="w-100 position-relative">
          <div className="journeyRightCloud">
            <Parallax
              strength={200}
              bgImage={journeyRightCloud}
              bgClassName="cloud-parallax-img"
              className="cloud-parallax"
            />
          </div>
        </div>
      </div>
    );
  }
}
