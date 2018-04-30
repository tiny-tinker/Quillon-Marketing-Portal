import React, { Component } from 'react';

//import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div>FOLLOW US</div>
        <div className="row">
          <div className="col-1">
            <a href="https://www.facebook.com/quilloncurrency/" target="blank">
              {' '}
              <span className="glyphicon glyphicon-bell" />{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://www.instagram.com/quilloncurrency/" target="blank">
              {' '}
              <i className="fa fa-instagram wow fadeInUp"> </i>{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://twitter.com/QuillonCurrency" target="blank">
              {' '}
              <i className="fa fa-twitter wow fadeInUp"> </i>{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://github.com/QuillonCurrency" target="blank">
              {' '}
              <i className="fa fa-github wow fadeInUp"> </i>{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://www.linkedin.com/company/quillonfoundation/">
              {' '}
              <i className="fa fa-linkedin-square wow fadeInUp"> </i>{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://quilloncurrency.slack.com" target="blank">
              {' '}
              <i className="fa fa-slack wow fadeInUp"> </i>{' '}
            </a>
          </div>
          <div className="col-1">
            <a href="https://medium.com/quillon" target="blank">
              {' '}
              <i className="fa fa-medium wow fadeInUp"> </i>{' '}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
