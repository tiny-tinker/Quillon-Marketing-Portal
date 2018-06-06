import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './stay.css';
import stayCenter from './images/stayCenter.png';
import leftCloud from './images/stayLeftCloud.png';

export default class Journey extends Component {
  render() {
    return (
      <div className="stay-section pt-4 pb-5">
        <div className="container text-center text-white">
          <div className="title">stay on track</div>
          <div className="description mb-5">
            Never has it been so easy to keep track of your whole portfolio
            while earning a significant return on your investment. Hosting
            masternodes, staking your wallet balance and directly impacting the
            future of your favorite currency!
          </div>
          <img className="stayCenter mt-5 mb-5" src={stayCenter} />
        </div>
        <div className="w-100 position-relative">
          <div className="leftCloud">
            <Parallax
              strength={200}
              bgImage={leftCloud}
              bgClassName="cloud-parallax-img"
              className="cloud-parallax"
            />
          </div>
        </div>
      </div>
    );
  }
}
