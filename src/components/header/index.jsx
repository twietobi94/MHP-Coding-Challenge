import React from 'react';

const MHP = require('../../../assets/MHP_LOGO.png');
const GOT = require('../../../assets/GOT.png');

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
