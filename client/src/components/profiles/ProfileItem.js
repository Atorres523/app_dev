import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile }) => {

    // Check if profile and profile.user exist
    if (!profile || !profile.user) {
        return <div>Profile data is not available
        </div>;
    }

    // Destructure properties from profile and profile.user
    const {
        user: { _id, name, avatar },
        location,
        favorite_activities,
        bio
    } = profile;

    return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {bio}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {favorite_activities.slice(0, 4).map((favorite_activity, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {favorite_activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;


