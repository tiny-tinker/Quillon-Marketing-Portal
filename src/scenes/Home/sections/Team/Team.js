import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Profile from './components/Profile/Profile';
import Footer from '../../components/Footer/Footer';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import avatar1 from './images/team1_Henning_Lubberding.jpg';
import avatar2 from './images/team2_Mark_Reynolds.jpg';
import avatar3 from './images/team3_Zachary_Elfman.jpg';
import avatar4 from './images/team4_Xinzhe_Li.jpg';
import avatar5 from './images/team5_Qiang_Dong.png';
import avatar6 from './images/team6_John_Magdy.jpg';
import avatar7 from './images/team7_Damian_Thiele.jpg';
import avatar8 from './images/team8_Chloe_Bocq.jpg';

import './team.css';

export default class Team extends Component {
  render() {
    const teamName = [
      'HENNING LÜBBERDING',
      'MARK REYNOLDS',
      'ZACHARY ELFMAN',
      'ERIC LEE',
      'Qiang Dong',
      'JOHN MAGDY',
      'DAMIAN THIELE',
      'CHLOÉ BOCQUILLON'
    ];
    const teamRole = [
      'MANAGING DIRECTOR',
      'HEAD OF DEVELOPMENT',
      'HEAD OF MONETARY POLICY',
      'Developer',
      'Developer',
      'Designer',
      'Legal Advisor',
      'MARKETEER'
    ];
    const teamDescription = [
      'Cloud services expert. Successful project lead with a history of delivering results for Google and Dropbox. Blockchain expert with a focus on its application as currency.',
      'Experienced software lead. PhD in Computer Science from Boston University and MSc in Mathematics from MIT. 20+ years of experience in cryptography and IT security.',
      'London-based hedge fund analyst turned winemaker. MSc Economic History from the London School of Economics and BA Philosophy & Economics from USC.',
      'Full stack developer experienced in designing and developing web applications with various languages and frameworks. Focusing on decentralized exchange and blockchain technology.',
      'Majored in Computer Networking from Liaoning University of Technology. Eight years of experience in web development.',
      'Freelance Designer with a focus on branding and corporate messaging. Educated in Computer Engineering and passionate about blockchain technology.',
      'Blockchain and Cryptocurrency enthusiast. Deep professional expertise in privacy law, and very much on top of cryptocurrency regulation. Law Degree from Goethe-University in Frankfurt.',
      'Marketing specialist with a focus on inbound marketing strategies. Experienced in implementing marketing automation strategies. Working at Hubspot and previously at Micro Focus.'
    ];
    const teamPhoto = [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
      avatar8
    ];
    const urlLinkedin = [
      'https://www.linkedin.com/in/henning-luebberding-11b74a88/',
      'https://www.linkedin.com/in/mark-reynolds-991a2114/',
      'https://www.linkedin.com/in/zachary-elfman-66389b4/',
      'https://www.linkedin.com/in/eric-lee-15302a164/',
      'https://www.linkedin.com/in/qiang-dong-7b5a3415b/',
      'https://www.linkedin.com/in/john-magdy-a95852b6/',
      '',
      'https://www.linkedin.com/in/chlo%C3%A9-bocquillon-052a8b74/'
    ];
    return (
      <Element name="team-section" className="team-section pt-3 pb-1">
        <div className="container text-center text-white">
          <div className="title"> TEAM </div>
          <div className="teamDescription">
            Nothing beats a strong team in which all members contribute to the
            best of their ability. Learn more about each member here. Feel free
            to get in touch if you are interested in contributing.
          </div>
        </div>
        <div className="members mt-4">
          <div className="row mr-0 ml-0">
            <div className="col-xs-11 col-md-11 col-centered">
              <div
                id="carousel"
                className="carousel slide"
                data-ride="carousel"
                data-type="multi"
                data-interval="2500"
              >
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="carousel-col">
                      <div className="block img-responsive">
                        <Profile
                          photo={teamPhoto[0]}
                          name={teamName[0]}
                          roleOfTeam={teamRole[0]}
                          description={teamDescription[0]}
                          linkedin={urlLinkedin[0]}
                        />
                      </div>
                    </div>
                  </div>
                  {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <div className="item">
                      <div className="carousel-col">
                        <div className="block img-responsive">
                          <Profile
                            photo={teamPhoto[index + 1]}
                            name={teamName[index + 1]}
                            roleOfTeam={teamRole[index + 1]}
                            description={teamDescription[index + 1]}
                            linkedin={urlLinkedin[index + 1]}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="left carousel-control">
                  <a href="#carousel" role="button" data-slide="prev">
                    <div className="arrowLeft">
                      <FaArrowLeft color="white" size="30" />
                    </div>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
                <div className="right carousel-control">
                  <a href="#carousel" role="button" data-slide="next">
                    <div className="arrowRight">
                      <FaArrowRight color="white" size="30" />
                    </div>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Element>
    );
  }
}
