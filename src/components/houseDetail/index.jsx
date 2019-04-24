import React from 'react';
import PropTypes from 'prop-types';

export default class HouseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { house } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <b style={{ fontSize: '1.5em' }}>{house.name}</b>
        </div>
        <div className="card-body">
          <p className="card-title">
            <b>Words: </b>
            {house.words ? house.words : 'unknown'}
          </p>
          <p className="card-text">
            <b>Region: </b>
            {house.region ? house.region : 'unknown'}
          </p>
          <p className="card-text">
            <b>Coat of Arms: </b>
            {house.coatOfArms ? house.coatOfArms : 'unknown'}
          </p>
          <p className="card-text">
            <b>Founded: </b>
            {house.founded ? house.founded : 'unknown'}
          </p>
        </div>
      </div>
    );
  }
}

HouseDetail.propTypes = {
  house: PropTypes.node,
};
