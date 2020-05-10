
import React from 'react';

import { capitalize } from 'helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RentalAssets from './RentalAssets';

const RentalInfo = ({ rental }) => {
  return (
    <div className="rental">
      {/* <!-- TODO: Display shared category --> */}
      <h2 className={`rental-type type-${rental.category}`}>{`${rental.shared ? 'Shared' : 'Whole'}  ${rental.category}`}</h2>
      {/* <!-- TODO: Display title --> */}
      <h1 className="rental-title">{rental.title}</h1>
      {/* <!-- TODO: Display city --> */}
      <h2 className="rental-city">{capitalize(rental.city)}</h2>
      <div className="rental-room-info">
        {/* <!-- TODO: Display numOfRooms --> */}
        <span>
          <FontAwesomeIcon icon="building" />
          {rental.numOfRooms} bedrooms
    </span>
        {/* // <!-- TODO: Display numOfRooms + 4 --> */}
        <span>
          <FontAwesomeIcon icon="user" /> {rental.numOfRooms + 4} guests
    </span>
        {/* // <!-- TODO: Display numOfRooms + 2 --> */}
        <span>
          <FontAwesomeIcon icon="bed" /> {rental.numOfRooms + 2} beds
    </span>
      </div>
      {/* <!-- TODO: Display description --> */}
      <p className="rental-description">
        {rental.description}
      </p>
      <hr />
      <RentalAssets />
    </div>
  );
}

export default RentalInfo;
