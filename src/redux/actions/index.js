import axios from "axios"
import { ActionTypes } from "../types/types"

export const loginUser = () => {
    return async (dispatch) => {
        try {
            const userObject = {
                userName: "shiv@yopmail.com",
                password: "123456"
            }
            const response = await axios.post("https://enapi.flyenbot.com/API/User/Login", userObject);
            localStorage.setItem('Token', response.data.token)
            return dispatch({
                type: ActionTypes.LOGIN_USER_SUCCESS,
                payload: response.data.token,
            });
        } catch (err) {
            return dispatch({
                type: ActionTypes.LOGIN_USER_FAILURE,
                payload: err,
            });
        }
    };
}
export const getContactsList = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://enapi.flyenbot.com/API/Chat/LoadChatData?AccountId=38&offset=0&rowSzie=10", {
                headers: {
                    Authorization:`Bearer ${localStorage.getItem('Token')}`
                }
            });
            return dispatch({
                type: ActionTypes.GET_CURRENT_CONTACT_SUCCESS,
                payload: response.data,
            });
        } catch (err) {
            return dispatch({
                type: ActionTypes.GET_CURRENT_CONTACT_FAILURE,
                payload: err,
            });
        }
    };
}

export const getMessages = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://enapi.flyenbot.com/API/Chat/LoadChatDataOnScroll?AccountId=38&toNumber=917417634375&offset=0&rowSize=10", {
                headers: {
                    Authorization:`Bearer ${localStorage.getItem('Token')}`
                }
            });
            return dispatch({
                type: ActionTypes.GET_MESSAGES_SUCCESS,
                payload: response.data,
            });
        } catch (err) {
            return dispatch({
                type: ActionTypes.GET_MESSAGES_FAILURE,
                payload: err,
            });
        }
    };
}