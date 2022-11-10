import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: '%%FIREBASE_API_KEY%%',
    authDomain: 'pace-tracker-17d05.firebaseapp.com',
    projectId: 'pace-tracker-17d05',
    storageBucket: 'pace-tracker-17d05.appspot.com',
    messagingSenderId: '98737777551',
    appId: '1:98737777551:web:4f0a49d00e7a1b63e879fa',
    measurementId: 'G-69SKZMWMYR',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logAnalyticsEvent = (eventName) => {
    console.log('event logged', eventName);
    logEvent(analytics, eventName);
};
