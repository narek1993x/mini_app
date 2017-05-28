import * as types from "../actions/types";

export default function(state={}, action) {
    switch(action.type) {
        case types.CREATE_ACCOUNT:                                   
            return {...state, ...action.payload};
        case types.ADD_PERSONAL_DATA:            
            return {...state, ...action.payload};                    
        default:
            return state;
    }
}