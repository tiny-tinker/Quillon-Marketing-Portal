import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { getBlockExplorerInfo } from '../../../../modules/blockExplorer/blockExplorerAction';

import ExploreStatus from './components/ExploreStatus/ExploreStatus';
import BorderDecoratedButton from '../../components/BorderDecoratedButton/BorderDecoratedButton';
import { Parallax, Background } from 'react-parallax';
import './Explorer.css';
import group from './images/group.png';
import forma from './images/forma.png';
import hashrate from './images/hashrate.png';
import shape from './images/shape.png';
import exploreCloud from './images/explore_cloud.png';
import cloudFirst from './images/cloud_first.png';
import cloudSecond from './images/clound_second.png';

class Explorer extends React.Component {
  componentDidMount() {
    this.props.blockExplorerActions.getBlockExplorerInfo();
  }

  render() {
    const { blockInfo } = this.props.blockExplorer;
    let hashRate = blockInfo.hashRate / 1000000000;
    console.log(blockInfo);
    return (
      <Element name="explore-section" className="explore-section">
        <div className="container">
          <div className="title">EXPLORE</div>
          <p className="section-description">
            Explore the impact Quillon is looking to make. Featuring
            masternodes, and a proof of work consensus algorithm, Quillon is
            able to lay the foundation for a bright future. A coin that’s build
            to last and protect your investment
          </p>
          <div className="row">
            <div className="col-md-8 col-sm-12 exploreStatus-container">
              <div className="row">
                <div className="col-6">
                  <ExploreStatus
                    imageUrl={group}
                    label="NUMBER OF\nMASTERNODES"
                    value={blockInfo.nodeCount}
                  />
                </div>
                <div className="col-6">
                  <ExploreStatus
                    imageUrl={forma}
                    label="QLN IN\nCIRCULATION"
                    value={blockInfo.circulation}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <ExploreStatus
                    imageUrl={hashrate}
                    label="HASHRATE\nIN GH/S"
                    value={hashRate}
                  />
                </div>
                <div className="col-6">
                  <ExploreStatus
                    imageUrl={shape}
                    label="CURRENT BLOCK\nNUMBER"
                    value={blockInfo.blockIndex}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 pt-5">
              <div className="exploreCloud">
                <Parallax
                  strength={100}
                  bgImage={exploreCloud}
                  bgClassName="cloud-parallax-img"
                  className="cloud-parallax"
                />
                <div className="compareStats">COMPARE LIVE STATS</div>
                <p className="compareDescription">
                  Check out Quillon with statistics taken directly from our
                  block explorer. All the information you need, directly at your
                  fingertips.
                </p>
                <BorderDecoratedButton label="BLOCKEXPLORER" width="180px" />
              </div>
            </div>
          </div>
          <div className="w-100 position-relative">
            <div className="cloud-first">
              <Parallax
                strength={200}
                bgImage={cloudFirst}
                bgClassName="cloud-parallax-img"
                className="cloud-parallax"
              />
            </div>
            <div className="cloud-second">
              <Parallax
                strength={200}
                bgImage={cloudSecond}
                bgClassName="cloud-parallax-img"
                className="cloud-parallax"
              />
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

Explorer.propTypes = {
  blockExplorerActions: PropTypes.shape({
    getBlockExplorerInfo: PropTypes.func
  })
};

Explorer.defaultProps = {
  blockExplorerActions: {}
};

export default connect(
  state => ({ ...state }),
  dispatch => ({
    blockExplorerActions: bindActionCreators(
      {
        getBlockExplorerInfo
      },
      dispatch
    )
  })
)(Explorer);
