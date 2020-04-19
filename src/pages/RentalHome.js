import React from 'react';
import RentalCard from '../components/rental/RentalCard';

import connect from '../store/connect';

import { fetchRentals, createRentals } from '../actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = rentals => rentals.map((rental) => <RentalCard key={rental._id} rental={rental} />);

  createRental = () => {

    const newRental = {
      _id: Math.random().toString(32).slice(2),
      title: "Kiran",
      city: "San Francisco",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 4,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyPrice: 43
    }

    this.props.dispatch(createRentals(newRental));
    
  }

  render = () => {
    const { rentals } = this.props;

    return (
      <div className="card-list">
        <div>
          <h1 className="page-title">Your Home All Around the World</h1>
          <div className="row">
            {
              this.renderRentals(rentals)
            }
          </div>
          <button
            onClick={this.createRental}
            className="btn btn-success">Create Rental</button>
        </div>
      </div>
    );
    
  }

}

// below line can be removed using HOC i.e connect function
// RentalHome.contextType = StateContext;


// to get only required data
const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}


export default connect(mapStateToProps)(RentalHome);