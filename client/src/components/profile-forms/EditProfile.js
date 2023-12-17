import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile
}) => {

    const [formData, setFormData] = useState({
        breed: '', 
        location: '',
        age: '',
        size: '',
        gender: '',
        bio: '',
        temperament: '',
        favorite_activities: '',
        availability: '',
        allergies: '',
        special_needs: '',
    });

    //const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        getCurrentProfile();
      }, []);
      
      useEffect(() => {
        if (!loading && profile) {
          setFormData({
            breed: profile.breed || '', 
            location: profile.location || '',
            age: profile.age || '',
            size: profile.size || '',
            gender: profile.gender || '',
            bio: profile.bio || '',
            temperament: profile.temperament || '',
            favorite_activities: profile.favorite_activities || '',
            availability: profile.availability || '',
            allergies: profile.allergies || '',
            special_needs: profile.special_needs || '',
          });
        }
      }, [loading, profile]);
      

      const {
        breed, 
        location,
        age,
        size,
        gender,
        bio,
        temperament,
        favorite_activities,
        availability,
        allergies,
        special_needs,
    } = formData

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, navigate);
    };

    return (
        <Fragment>
        <h1 className="large text-primary">
            Tell us about your dog</h1>
        <p className="lead">
            <i className="fas fa-user"></i> 
                We want to know all about your dog!
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input type="text" placeholder="Breed" name="breed" value={breed} onChange={e => onChange(e)} />
                <small className="form-text">What type of dog breed?</small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                <small className="form-text">City & state suggested (eg. Boston, MA)</small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Age" name="age" value={age} onChange={e => onChange(e)} />
                <small className="form-text"></small>
            </div>

            <div className="form-group">
                <select name="size" value={size} onChange={e => onChange(e)}>
                    <option value="0">* please select your dog's size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <small className="form-text"></small>
            </div>

            <div className="form-group">
                <select name="gender" value={gender} onChange={e => onChange(e)}>
                    <option value="0">* Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <small className="form-text"></small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Temperament" name="temperament" value={temperament} onChange={e => onChange(e)} />
                <small className="form-text">What is your dogs general mood</small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Favorite activities" name="favorite_activities" value={favorite_activities} onChange={e => onChange(e)} />
                <small className="form-text">
                </small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Availability" name="availability" value={availability} onChange={e => onChange(e)} />
                <small className="form-text">
                    If people want to set up a playdate with your dog when would be best? (please enter "true" or "false")     
                </small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Allergies" name="allergies" value={allergies} onChange={e => onChange(e)} />
                <small className="form-text">
                    Does you dog have any allergies?
                </small>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Special needs" name="special_needs" value={special_needs} onChange={e => onChange(e)} />
                <small className="form-text">
                    Does your dog have any special needs?
                </small>
            </div>

            <div className="form-group">
                <textarea placeholder="A short bio about your wonderful dog" name="bio" value={bio} onChange={e => onChange(e)} />
                <small className="form-text">Anything else you would like to share?</small>
            </div>

            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { createProfile, getCurrentProfile }
)(EditProfile);
