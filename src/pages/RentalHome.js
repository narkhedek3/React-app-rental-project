import React from 'react';
import RentalCard from 'components/rental/RentalCard';

// custom HOC redux connect
// import connect from '../store/connect';

import { connect } from 'react-redux';

import { fetchRentals } from '../actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = rentals => rentals.map((rental) => <RentalCard key={rental._id} rental={rental} />);

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
        </div>
      </div>
    );
    
  }

}

// below line can be removed using HOC[high order component] i.e connect function
// RentalHome.contextType = StateContext;


// to get only required data
const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}


export default connect(mapStateToProps)(RentalHome);