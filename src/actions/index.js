import { AUTH_USER_SOCIAL } from '../actionsTypes/index.js';

export function authUserSocial(userData) {
	return {
		type: AUTH_USER_SOCIAL,
		payload: userData
	};
}
