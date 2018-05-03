import React, { Component } from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaSlack from 'react-icons/lib/fa/slack';
import FaMedium from 'react-icons/lib/fa/medium';

import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-section pt-5">
        <div className="container text-center">
          <div className="title text-white">FOLLOW US</div>
          <div className="row">
            <div className="col-lg-4"> </div>
            <div className="col-12 col-lg-4">
              <div className="row seven-cols">
                <div className="col-1">
                  <a
                    href="https://www.facebook.com/quilloncurrency/"
                    target="blank"
                  >
                    <FaFacebook color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="https://www.instagram.com/QuillonCurrency"
                    target="blank"
                  >
                    <FaInstagram color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://twitter.com/QuillonCurrency" target="blank">
                    <FaTwitter color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://github.com/QuillonCurrency" target="blank">
                    <FaGithub color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="https://www.linkedin.com/company/quillonfoundation/"
                    target="blank"
                  >
                    <FaLinkedin color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://quilloncurrency.slack.com" target="blank">
                    <FaSlack color="white" size="25" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://medium.com/quillon" target="blank">
                    <FaMedium color="white" size="25" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4"> </div>
          </div>
        </div>
      </div>
    );
  }
}
