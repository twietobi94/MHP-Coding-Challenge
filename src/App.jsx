import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './components/header';
import Houses from './components/houses';
import Footer from './components/footer';

import Style from './Style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className={Style.wrapper}>
          <div className="row">
            <Houses className="col" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
