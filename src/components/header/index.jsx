import React from 'react';

// imports for header images
const MHP = require('../../../assets/MHP_LOGO.png');
const GOT = require('../../../assets/GOT.png');

// Header component of the page
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">
          <img src={GOT} width="194" height="30" alt="" />
        </a>
        <a className="navbar-brand">
          <img src={MHP} width="123" height="30" alt="" />
        </a>
      </nav>
    );
  }
}
