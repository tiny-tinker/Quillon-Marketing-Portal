import React, { Component } from 'react';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import './profile.css';
export default class Profile extends Component {
  render() {
    return (
      <div className="profile text-center pt-5 pb-5">
        <img
          className="photo"
          src={this.props.photo}
          width="150"
          height="150"
        />
        <div className="name mt-2"> {this.props.name} </div>
        <div className="role mt-2"> {this.props.roleOfTeam} </div>
        <div className="description mt-2">
          {' '}
          <p> {this.props.description} </p>{' '}
        </div>
        <div className="linkedin mt-3 mb-3">
          <a href={this.props.linkedin} target="blank">
            <FaLinkedin size="27" color="black" />
          </a>
        </div>
      </div>
    );
  }
}
