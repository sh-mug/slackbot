import * as firebase from 'firebase-admin';

import serviceAccount from '../google_application_credentials_live5.json';

const liveApp = firebase.initializeApp({
    // @ts-ignore
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_ENDPOINT_LIVE5,
}, 'tsg-live-5');

const db = firebase.firestore(liveApp);

export default db;