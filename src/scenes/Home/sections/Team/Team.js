import React, { Component } from 'react';
import { Element } from 'react-scroll';

import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaInstagram from 'react-icons/lib/fa/instagram';

import avatar1 from './images/team1_Henning_Lubberding.jpg';
import avatar2 from './images/team2_Mark_Reynolds.jpg';
import avatar3 from './images/team3_Zachary_Elfman.jpg';
import avatar4 from './images/team4_Xinzhe_Li.jpg';
import avatar5 from './images/team5_Qiang_Dong.png';
import avatar6 from './images/team6_John_Magdy.jpg';
import avatar7 from './images/team7_Damian_Thiele.jpg';
import avatar8 from './images/team8_Chloe_Bocq.jpg';

import './team.css';

const Profile = function Profile(props) {
  return (
    <div className="profile text-center pt-5 pb-5">
      <img className="photo" src={props.photo} width="150" height="150" />
      <div className="name mt-2"> {props.name} </div>
      <div className="role mt-2"> {props.roleOfTeam} </div>
      <div className="description mt-2"> {props.description} </div>
      <div className="linkedin-slack mt-3 mb-3">
        <a href={props.linkedin} target="blank">
          <FaLinkedin size="27" color="black" />
        </a>
      </div>
    </div>
  );
};

export default class Team extends Component {
  render() {
    const teamName = [
      'Henning Lübberding',
      'Mark Reynolds',
      'Zachary Elfman',
      'Xinzhe Li',
      'Qiang Dong',
      'John Magdy',
      'Damian Thiele',
      'Chloé Bocquillon'
    ];
    const teamRole = [
      'Founder',
      'Head of Development',
      'Head of Monetary Policy',
      'Developer',
      'Senior Developer',
      'Designer',
      'Legal Advisor',
      'Marketing'
    ];
    const teamDescription = [
      'Experienced leading large scale projects for premier user experience focused B2C unicorn at Dropbox and infrastructure IT giant Micro Focus.',
      'PhD in Computer Science from Boston University and MS in Mathematics from MIT. R&D Wizard. 20+ years of experience in cryptography and IT security. Cypherpunk.',
      'Experienced Macroeconomist with a MS from the London School of Economics. Spent eight years working at various hedgefunds in London.',
      'Full stack developer in designing and developing web application development with various languages and frameworks. Experienced in Decentralized Exchange and Blockchain technology.',
      'Majored in Computer Networking from Liaoning University of technology. 8 years of experience in web development.',
      'Freelance Designer with a focus on branding and corporate messaging. Educated in Computer Engineering and passionate about blockchain technology.',
      'Blockchain and Cryptocurrency enthusiast. Deep professional expertise in privacy law. On top of cryptocurrency regulation. Law Degree from Goethe-University in Frankfurt.',
      'Marketing specialist having worked for Hubspot and previously at Micro Focus. Experienced in implementing and assessing marketing automation strategies.'
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
      'https://www.linkedin.com/in/xinzhe-li-16586b15b/',
      'https://www.linkedin.com/in/qiang-dong-7b5a3415b/',
      'https://www.linkedin.com/in/john-magdy-a95852b6/',
      '',
      'https://www.linkedin.com/in/chlo%C3%A9-bocquillon-052a8b74/'
    ];
    return (
      <Element name="team-section" className="team-section pt-3 pb-5">
        <div className="container text-center text-white">
          <div className="title"> TEAM </div>
          <div className="teamDescription">
            Nothing beats a strong team which allows all members to contribute
            to the best of their ability. You can learn more about each member
            here. Feel free to get in touch if you are interested in
            contributing yourself
          </div>
        </div>
        <div className="members container-fluid mt-5">
          <div
            id="carouselExample"
            className="carousel slide"
            data-ride="carousel"
            data-interval="100000"
          >
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
              <div className="carousel-item col-md-3 active">
                <Profile
                  photo={teamPhoto[0]}
                  name={teamName[0]}
                  roleOfTeam={teamRole[0]}
                  description={teamDescription[0]}
                  linkedin={urlLinkedin[0]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[1]}
                  name={teamName[1]}
                  roleOfTeam={teamRole[1]}
                  description={teamDescription[1]}
                  linkedin={urlLinkedin[1]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[2]}
                  name={teamName[2]}
                  roleOfTeam={teamRole[2]}
                  description={teamDescription[2]}
                  linkedin={urlLinkedin[2]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[3]}
                  name={teamName[3]}
                  roleOfTeam={teamRole[3]}
                  description={teamDescription[3]}
                  linkedin={urlLinkedin[3]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[4]}
                  name={teamName[4]}
                  roleOfTeam={teamRole[4]}
                  description={teamDescription[4]}
                  linkedin={urlLinkedin[4]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[5]}
                  name={teamName[5]}
                  roleOfTeam={teamRole[5]}
                  description={teamDescription[5]}
                  linkedin={urlLinkedin[5]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[6]}
                  name={teamName[6]}
                  roleOfTeam={teamRole[6]}
                  description={teamDescription[6]}
                  linkedin={urlLinkedin[6]}
                />
              </div>
              <div className="carousel-item col-md-3">
                <Profile
                  photo={teamPhoto[7]}
                  name={teamName[7]}
                  roleOfTeam={teamRole[7]}
                  description={teamDescription[7]}
                  linkedin={urlLinkedin[7]}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExample"
              role="button"
              data-slide="prev"
            >
              <div className="arrowLeft">
                <FaArrowLeft color="white" size="30" />
              </div>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-faded"
              href="#carouselExample"
              role="button"
              data-slide="next"
            >
              <div className="arrowRight">
                <FaArrowRight color="white" size="30" />
              </div>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Element>
    );
  }
}
