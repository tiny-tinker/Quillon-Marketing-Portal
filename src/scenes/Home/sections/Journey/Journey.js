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
            journey, begins here
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit am numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem
          </div>
          <button type="button" className="button mt-5 text-white">
            {' '}
            head to our app{' '}
          </button>
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
