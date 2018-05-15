import React from 'react';
import {Element} from 'react-scroll'
import ExploreStatus from './components/ExploreStatus/ExploreStatus';
import BorderDecoratedButton from '../../components/BorderDecoratedButton/BorderDecoratedButton';
import { Parallax, Background } from 'react-parallax';
import './Explorer.css';
import group from './images/group.png';
import forma from './images/forma.png';
import hashrate from './images/hashrate.png'
import shape from './images/shape.png'
import exploreCloud from './images/explore_cloud.png'
import cloudFirst from './images/cloud_first.png';
import cloudSecond from './images/clound_second.png';


class Explorer extends React.Component {

  render() {
    return (
      <Element name="explore-section" className="explore-section">
        <div className="container">
          <div className="title">
            EXPLORE
          </div>
          <p className="section-description">
            Explore the impact Quillon is looking to make. Featuring masternodes, and a proof of work consensus algorithm, Quillon is able to lay the foundation for a bright future. A coin that’s build to last and protect your investment
          </p>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-6">
                  <ExploreStatus imageUrl={group} label="NUMBER OF\nMASTERNODES" value="7777"/>
                </div>
                <div className="col-6">
                  <ExploreStatus imageUrl={forma} label="QLN IN\nCIRCULATION" value="3500000"/>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <ExploreStatus imageUrl={hashrate} label="HASHRATE\nIN GH/S" value="452.92"/>
                </div>
                <div className="col-6">
                  <ExploreStatus imageUrl={shape} label="CURRENT BLOCK\nNUMBER" value="281.377"/>
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
                >
                </Parallax>
                <div className="compareStats">
                  COMPARE LIVE STATS
                </div>
                <p>Check out Quillon with statistics taken directly from our block explorer. All the information you need, directly at your fingertips.</p>
                <BorderDecoratedButton label="BLOCKEXPLORER" width="180px"/>
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

export default Explorer;