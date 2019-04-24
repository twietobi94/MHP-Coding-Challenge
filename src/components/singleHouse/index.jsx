import React from 'react';
import PropTypes from 'prop-types';
import style from './singleHouse.css';

export default class SingleHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { change, house } = this.props;
    return (
      <li
        onClick={() => change(house)}
        onKeyPress={null}
        className="list-group-item"
        style={{ cursor: 'pointer' }}
      >
        <i
          className={
            house.diedOut.length === 0
              ? 'fas fa-home fa-lg'
              : 'fas fa-house-damage fa-lg'
          }
        />
        <span className={style['house-name']}> {house.name} </span>
      </li>
    );
  }
}

SingleHouse.propTypes = {
  house: PropTypes.node,
  change: PropTypes.func,
};
