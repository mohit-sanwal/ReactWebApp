import { GET_LISTING_SUCCESS } from '../action/action.js';


const initialState = {
    list: []
}


const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LISTING_SUCCESS:
        return {
            list: action.payload
        }
        default: return state
    }
}


export default listReducer;
