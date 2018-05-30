import React, { Component } from 'react';

import whitepaper_top from './images/whitepaper_top.png';
import whitepaper_bottom from './images/whitepaper_bottom.png';
import leftEffect from './images/whitepaperLeftEffect.png';
import centerImage1 from './images/whitepaperCenter1.png';
import centerImage2 from './images/whitepaperCenter2.png';
import { Element } from 'react-scroll';
import './whitepaper.css';

export default class WhitePaper extends Component {
  render() {
    return (
      <Element id="whitepapaer-section" className="whitepaper-section">
        <img src={whitepaper_top} className="top_bg" />
        <div className="container text-center">
          <img src={leftEffect} className="leftEffect" />
          <img src={centerImage1} className="centerImage1" />
          <img src={centerImage2} className="centerImage2" />
          <div className="title mt-5 mb-3"> WHITEPAPER </div>
          <div className="description mt-3 mb-5">
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
        <img src={whitepaper_bottom} className="bottom_bg" />
      </Element>
    );
  }
}
