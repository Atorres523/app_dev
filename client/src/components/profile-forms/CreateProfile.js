import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
//import React, { useState } from 'react';

/*
const CreateProfile = ({ createProfile }) => {
    const [formData, setFormData] = useState({
        breed: '',
        age: '',
        location: '',
        size: '',
        gender: '',
        bio: '',
        temperament: '',
        favorite_activities: '',
        availability: '',
        allergies: '',
        special_needs: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const navigate = useNavigate();

    const {
        breed,
        age,
        location,
        size,
        gender,
        bio,
        temperament,
        favorite_activities,
        availability,
        allergies,
        special_needs
    } = formData
*/
const CreateProfile = ({ createProfile }) => {
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

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, navigate);
    }

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
                {/* <div className="form-group">
                    <select name="status" value={status} onChange={e => onChange(e)}>
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">Give us an idea of where you are at in your career</small>
                </div> */}
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

                {/* <div className="my-2">
                    <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button"
                        className="btn btn-light">Add Social Network Links</button>
                    <span>Optional</span>
                </div> */}

                {/* {displaySocialInputs && <Fragment>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
                    </div>
                </Fragment>} */}

                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </Fragment>
    )
} 

export default connect(null, { createProfile })(CreateProfile);