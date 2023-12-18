import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    favorite_activities,
    temperament,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    <h2 className='text-primary'>Temperament</h2>
      <div className='temperament'>
        {temperament.map((temp, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-check' /> {temp}
          </div>
        ))}
      </div>
    <h2 className='text-primary'>Favorite Activities</h2>
    <div className='favorite_activities'>
      {favorite_activities.map((favorite_activity, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {favorite_activity}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;