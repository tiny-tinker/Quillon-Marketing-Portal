import React, { Component } from 'react';
import Progress from 'react-progressbar';
//let Progress = require('react-progressbar');

import ReadMore from '../ReadMore/ReadMore';
import './item.css';

export default class Item extends Component {
  render() {
    return (
      <div className="item text-white text-left mb-2">
        <div className="itemTitle pt-1 pb-2">
          {this.props.title}
          <div className="progressValue">
            {' '}
            <span className="value">{this.props.progressValue}</span>{' '}
            <span className="percentage">%</span>{' '}
          </div>
        </div>
        <Progress completed={this.props.progressValue} loading="false" />
        <div>
          <ReadMore content={this.props.content} />
        </div>
      </div>
    );
  }
}
