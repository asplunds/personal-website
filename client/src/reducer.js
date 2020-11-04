import { combineReducers } from "redux";
import { createStore } from "redux";


const serverStatus = (state = "WAITING", action = {}) => {

	switch (action.type) {
		case "SET_STATUS":
			return action.status
		default:
			return state
	}
}
const loggedIn = (state = "LOGGED_OUT", action = {}) => {

	switch (action.type) {
		case "SET_LOGGED_IN_STATE":
			return action.state
		default:
			return state
	}
}




const reducer = combineReducers({ serverStatus, loggedIn })

const store = createStore(reducer);

export {

	store

}