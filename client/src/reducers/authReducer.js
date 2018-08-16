// records whether or not the user is logged in
import { FETCH_USER } from '../actions/types';

// return null if we don't know auth state
export default function(state = null, action) {

	console.log('ACTION @ AUTH REDUCER: ', action);

	switch (action.type) {

		case FETCH_USER:
			return action.payload || false;

		default:
			return state;

	}

}