export const calulateTime = (pace, distance) => {
    console.log('calulateTime');
    return distance * pace;
};

export const calculatePace = (time, distance) => {
    console.log('calulatePace');
    return distance / time;
};
