import { AUTH_USER_SOCIAL } from '../actionsTypes/index.js';

import { Map } from 'immutable';

export default function(
	state = Map({ user: null, authenticated: false, error: '' }),
	action
) {
	switch (action.type) {
		case AUTH_USER_SOCIAL: {
			return state.merge({
				authenticated: true,
				user: Map(action.payload),
				error: ''
			});
		}

		// case AUTH_ERROR:
		// 	return state.set('error', action.payload);

		default:
			return state;
	}
}
