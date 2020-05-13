import axios from 'axios'
export const GET_LISTING_REQUEST = "GET_LISTING_REQUEST";
export const GET_LISTING_SUCCESS = "GET_LISTING_SUCCESS";
export const GET_LISTING_ERROR = "GET_LISTING_ERROR";




const request = (Type) => {
    return {
        type: Type,
        payload
    }
}


const success = (Type, payload) => {
    return {
        type: Type,
        payload
    }
}

const error = (Type) => {
    return {
        type: Type
    }
}


export function  getListing () {
   return function (dispatch) {
      return axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
        console.log(response);
        dispatch(success('GET_LISTING_SUCCESS', response.data))
      })
   }
}
