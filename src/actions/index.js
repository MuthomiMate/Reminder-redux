import {ADD_REMINDER} from '../constants';


export const add_reminder = (text) =>{
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log("action in add reminder", action);
    return action;
}