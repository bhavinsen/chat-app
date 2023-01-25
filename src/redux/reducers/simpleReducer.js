import { ActionTypes } from "../types/types"

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        token: action.payload
      }
    case ActionTypes.GET_CURRENT_CONTACT_SUCCESS:
      return {
        contact: action.payload
      }
    case ActionTypes.GET_MESSAGES_SUCCESS:
      return {
        message: action.payload
      }
    default:
      return state
  }
}