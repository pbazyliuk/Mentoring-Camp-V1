import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyCBl30zPbCX357khxlT0nw55Ftd0Nazld4',
	authDomain: 'mentor-platform.firebaseapp.com',
	databaseURL: 'https://mentor-platform.firebaseio.com',
	projectId: 'mentor-platform',
	storageBucket: 'mentor-platform.appspot.com',
	messagingSenderId: '262741849512'
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

window.firebase = firebase;
window.auth = auth;
