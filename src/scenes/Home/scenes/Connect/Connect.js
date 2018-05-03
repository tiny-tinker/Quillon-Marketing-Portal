import React, { Component } from 'react';

import './connect.css';

export default class Connect extends Component {
  render() {
    return (
      <div className="connect-section pt-5 pb-5">
        <div className="container text-center">
          <div className="title text-white mb-3"> CONNECT </div>
          <div className="signUpTitle text-white"> JOIN OUR NEWSLETTER </div>
          <div className="signUpDescription text-white">
            {' '}
            Get Exclusive Content, offers and more by joining our newsletter
            mailing list{' '}
          </div>
          <div className="signUpDiv mt-3">
            <div id="newsletterSignUpDiv" />
          </div>
        </div>
      </div>
    );
  }
}
