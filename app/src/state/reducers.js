import { GET_QUOTES, GET_RANDOM_QUOTE } from './actionTypes'

const initialState = []

export function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_QUOTE:
      return action.payload
    case GET_QUOTES:
      return {
        ...state,
        page: action.payload.page,
        pageContent: action.payload.quotes,
      }
    default:
      return state
  }
}
