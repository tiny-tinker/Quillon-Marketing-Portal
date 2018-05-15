import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import CountUp, { startAnimation } from 'react-countup';
import './ExploreStatus.css';

class ExploreStatus extends React.Component {
  constructor(props) {
    super(props);
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.state = { bAnimationTriggered: false};
  }

  handleWaypointEnter() {
    if (this.state.bAnimationTriggered == false) {
      this.state.bAnimationTriggered = true;
      startAnimation(this.myCountUp);
    }
  }

  render() {
    const {imageUrl, label, value} = this.props;
    const newLabel = label.split('\\n').map((item, i) => <h4 className="exploreStatus-label" key={i}>{item}</h4>);
    return (
      <div className="exploreStatus">
        <img className="exploreStatus-image" src={imageUrl} role="presentation"/>
        <div className="clearfix" />
        {newLabel}
        <h4 className="exploreStatus-value">
          <Waypoint
            onEnter={this.handleWaypointEnter}
          />
          <CountUp
            start={0}
            end={value}
            duration={2.75}
            useGrouping={true}
            useEasing={true}
            separator="."
            ref={(countUp) => {
              this.myCountUp = countUp;
            }}
          />
        </h4>
      </div>
    );
  }
}
ExploreStatus.propTypes = {
  imageUrl: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};

export default ExploreStatus;