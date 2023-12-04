import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: 'AIzaSyDO7-jwITVu0zXhkiMvheg-8WcWWvXTkZE',
    authDomain: 'picwave-app.firebaseapp.com',
    projectId: 'picwave-app',
    storageBucket: 'picwave-app.appspot.com',
    messagingSenderId: '109812298213',
    appId: '1:1098122982137:web:37e525ae70d82381d76828'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
