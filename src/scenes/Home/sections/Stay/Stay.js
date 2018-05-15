import React, { Component } from 'react';

import './stay.css';
import stayCenter from './images/stayCenter.png';
import leftEffect from './images/stayLeftEffect.png';
import rightEffect from './images/stayRightEffect.png';

export default class Journey extends Component {
  render() {
    return (
      <div className="stay-section pt-4 pb-5">
        <div className="container text-center text-white">
          <div className="title">stay on track</div>
          <div className="description">
            Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem
          </div>
          <img className="rightEllipse" src={rightEffect} />
          <img className="leftEllipse" src={leftEffect} />
          <img className="stayCenter mt-5 mb-5" src={stayCenter} />
        </div>
      </div>
    );
  }
}
