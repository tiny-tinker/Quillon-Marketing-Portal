import React from 'react'
import PropTypes from 'prop-types';
import './Feature.css';

class Feature extends React.Component {
  render() {
    const {imageUrl, title, description} = this.props;
    return (
      <div className="benefit-feature">
        <a className="feature-imageContainer">
          <img src={imageUrl}/>
        </a>
        <div className="feature-title">
          {title}
        </div>
        <p className="feature-description">
          {description}
        </p>
      </div>
    );
  }
}

Feature.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Feature;