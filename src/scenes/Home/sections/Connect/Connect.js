import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './connect.css';

export default class Connect extends Component {
  render() {
    return (
      <Element name="contact-section" className="connect-section pt-5 pb-5">
        <div className="container text-center">
          <div className="title text-white mb-3"> NEWSLETTER </div>
          <div className="signUpDescription text-white mt-2">
            {' '}
            Get Exclusive Content, offers and more by joining our newsletter
            mailing list{' '}
          </div>
          <div className="signUpDiv mt-3">
            <div id="newsletterSignUpDiv" />
          </div>
        </div>
      </Element>
    );
  }
}
