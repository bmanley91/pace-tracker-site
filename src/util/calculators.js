export const calulateTime = (pace, distance) => {
    console.log('Time calculation triggered');
    return distance * pace;
};

export const calculatePace = (time, distance) => {
    console.log('Pace calculation triggered');
    return time / distance;
};
