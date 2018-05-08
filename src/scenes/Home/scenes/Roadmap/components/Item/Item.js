import React, { Component } from 'react';

import ReadMore from '../ReadMore/ReadMore';
import './item.css';

export default class Item extends Component {
  render() {
    return (
      <div className="item text-white text-left mb-2">
        <div className="itemTitle pt-1 pb-2">{this.props.title}</div>
        <div className="line" />
        <div>
          <ReadMore content={this.props.content} />
        </div>
      </div>
    );
  }
}
