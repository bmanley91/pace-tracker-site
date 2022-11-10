import { logAnalyticsEvent } from './firebase';

export const calulateTime = (pace, distance) => {
    logAnalyticsEvent('time-calculated');
    return distance * pace;
};

export const calculatePace = (time, distance) => {
    logAnalyticsEvent('pace-calculated');
    return time / distance;
};
