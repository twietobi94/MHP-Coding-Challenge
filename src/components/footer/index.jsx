import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          <span style={{ marginRight: '5px' }}>Made with</span>
          <span style={{ color: 'red' }}>
            <i className="fas fa-heart" />
          </span>
          <span style={{ marginLeft: '5px', marginRight: '5px' }}>by</span>
          <a href="https://github.com/twietobi94">Tobias Götze</a>
        </div>
      </footer>
    );
  }
}
