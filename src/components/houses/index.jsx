import React from 'react';

import SingleHouse from '../singleHouse';
import HouseDetail from '../houseDetail';

export default class Houses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      selectedHouse: null,
      count: 1,
    };
  }

  componentDidMount() {
    this.getHouses(1);
  }

  getHouses(count) {
    fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${count}&pageSize=10`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          houses: data,
        });
      });
  }

  nextHouses(count) {
    let newCount = count;
    newCount += 1;
    this.setState(
      {
        count: newCount,
      },
      () => {
        this.getHouses(newCount);
      },
    );
  }

  previousHouses(count) {
    if (count !== 1) {
      let newCount = count;
      newCount -= 1;
      this.setState(
        {
          count: newCount,
        },
        () => {
          this.getHouses(newCount);
        },
      );
    }
  }

  pickHouse(house) {
    this.setState({
      selectedHouse: house,
    });
  }

  render() {
    const { selectedHouse, count } = this.state;
    return (
      <div className="row col-md-12">
        <div className="col-md-4">
          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {count !== 1 ? (
                  <li className="page-item">
                    <a
                      className="page-link"
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.previousHouses(count)}
                      onKeyPress={null}
                      role="button"
                    >
                      Previous
                    </a>
                  </li>
                ) : null}
                <li className="page-item">
                  <a className="page-link">{count}</a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.nextHouses(count)}
                    onKeyPress={null}
                    role="button"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="list-group">
            {this.state.houses.length > 0 ? (
              this.state.houses.map((house, i) => (
                <SingleHouse
                  key={`house-${i}`}
                  house={house}
                  change={this.pickHouse.bind(this)}
                />
              ))
            ) : (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </ul>
        </div>
        <div className="col-md-8">
          {selectedHouse ? (
            <HouseDetail house={selectedHouse} />
          ) : (
            <div
              className="jumbotron jumbotron-fluid"
              style={{ backgroundColor: '#fff', opacity: '.5' }}
            >
              <div className="container">
                <h1 className="display-4 text-center">Select a house</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
