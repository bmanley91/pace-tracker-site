export const paceToSeconds = (paceString) => {
    console.log(paceString);
    const [mins, seconds] = paceString.split(':');
    console.log(`Mins: ${mins} Seconds: ${seconds}`);
    return mins * 60 + Number(seconds);
};

export const secondsToTime = (secondsInput) => {
    console.log(`secondsToTime input ${secondsInput}`);
    const hours = Math.floor(secondsInput / 3600);
    const remainder = secondsInput - hours * 3600;
    console.log(remainder);
    const minutes = Math.floor(remainder / 60);
    const seconds = secondsInput % 60;

    console.log(`Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`);

    return hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};
