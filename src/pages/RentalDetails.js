
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';

import RentalInfo from 'components/rental/RentalInfo';

class RentalDetails extends React.Component {

  componentDidMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(fetchRentalById(rentalId));
  }

  render() {
    const { rental, isFetching } = this.props;
    if (!isFetching) {
      return (
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                {/* <!-- TODO: Display rental image --> */}
                <img src={rental.image} alt={rental.title} />
              </div>
              <div className="col-md-6">
                {/* <!-- TODO: Display rental image --> */}
                <img src={rental.image} alt={rental.title} />
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                <RentalInfo rental={rental} />
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section>
      );
    } else {
      return <h4>Loding...</h4>
    }

  }
}

// to get only required data
const mapStateToProps = ({ rental }) => ({ rental: rental.item, isFetching: rental.isFetching })

export default connect(mapStateToProps)(withRouter(RentalDetails));