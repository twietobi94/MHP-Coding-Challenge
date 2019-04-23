import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return <div className={style['hello-world']}>{title}</div>;
  }
}

HelloWorld.propTypes = {
  title: PropTypes.string,
};
