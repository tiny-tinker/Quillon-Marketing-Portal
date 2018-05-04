import React, { Component } from 'react';

import rightCircle from './images/whitepaperRightCircle.png';
import leftCircle from './images/whitepaperLeftCircle.png';

import './whitepaper.css';

export default class WhitePaper extends Component {
  render() {
    return (
      <div className="whitepaper-section mt-5">
        <div className="container text-center">
          <div className="title mt-5 mb-5"> WHITEPAPER </div>
          <div className="description mt-5 mb-5">
            Our roadmap is the result of extensive research and development
            which we are happy to share in more detail through our whitepaper.
            The result of hours of work from our whole team the Quillon
            Whitepaper aims to give the interested investor, user and developer
            a deeper look at our intent. It covers the importance of a great
            user experience, the necessity of privacy in cryptocurrency as well
            as smart contracts and its applications in financial- and
            user-focused services on the Quillon Blockchain. It also gives you a
            deep insight into the technical specifications, supply schedule and
            more
          </div>
          <button className="downloadButton mt-5 mb-5" type="button">
            {' '}
            DOWNLOAD WHITEPAPER{' '}
          </button>
        </div>
        <img src={rightCircle} className="rightCircle" />
        <img src={leftCircle} className="leftCircle" />
      </div>
    );
  }
}
