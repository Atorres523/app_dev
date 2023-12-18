import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    user: { name, avatar },
    breed,
    location,
    age,
    size,
    gender,
    bio,
    temperament,
    favorite_activities,
    availability
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      {breed && <p>Breed: {breed}</p>}
      {location && <p>Location: {location}</p>}
      {age && <p>Age: {age}</p>}
      {size && <p>Size: {size}</p>}
      {gender && <p>Gender: {gender}</p>}
      {bio && <p>Bio: {bio}</p>}
      {temperament && temperament.length > 0 && (
        <p>Temperament: <span className="custom-temperament">{temperament.join(', ')}</span></p>
      )}
      {favorite_activities && favorite_activities.length > 0 && (
        <p>Favorite Activities: <span className="custom-activities">{favorite_activities.join(', ')}</span></p>
      )}

      {availability !== undefined && (
        <p>Availability: {availability ? 'Available' : 'Not Available'}</p>
      )}
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;