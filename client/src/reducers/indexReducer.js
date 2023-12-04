import {combineReducers} from 'redux';
import alert from './alertReducer';
import auth from './auth';


export default combineReducers({
    alert,
    auth
})