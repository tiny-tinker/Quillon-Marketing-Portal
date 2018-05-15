import React from 'react';
import PropTypes from 'prop-types';
import './BorderDecoratedButton.css';
class BorderDecoratedButton extends React.Component {
  render() {
    const { label, onClickButton } = this.props;
    const buttonStyle = {
      width: this.props.width,
    };

    return (
      <button onClick={onClickButton} className="borderDecoratedButton" style={buttonStyle}>
        <span className="label">
          {label}
        </span>
      </button>
    );
  }
}

BorderDecoratedButton.defaultProps = {
  width: '120px'
};

BorderDecoratedButton.propTypes = {
  label: PropTypes.string,
  onClickButton: PropTypes.func,
  width: PropTypes.string,
};

export default BorderDecoratedButton;