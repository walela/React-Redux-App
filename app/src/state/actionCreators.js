import { GET_QUOTES, GET_RANDOM_QUOTE } from './actionTypes'
import axios from 'axios'

export const getQuotes = () => dispatch => {
  axios
    .get(`https://programming-quotes-api.herokuapp.com/quotes/page/2`)
    .then(response => {
      dispatch({
        type: GET_RANDOM_QUOTE,
        payload: response.data,
      })
    })
    .catch(error => {
      console.error(error)
    })
}
