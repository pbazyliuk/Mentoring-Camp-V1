import * as actionsTypes from '../actionsTypes/index.js';

export default function DefaultReducer(state={}, action) {
	switch (action.type) {
		case actionsTypes.DEFAULT_ACTION:
			return Object.assign({}, { isShown: action.val });

		default:
			return state;
	}
}
