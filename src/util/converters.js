export const paceToSeconds = (paceString) => {
    console.log(paceString);
    const [mins, seconds] = paceString.split(':');
    return mins * 60 + Number(seconds);
};

export const secondsToTimeString = (secondsInput) => {
    const hours = Math.floor(secondsInput / 3600);
    const remainder = secondsInput - hours * 3600;
    const minutes = Math.floor(remainder / 60);
    const seconds = Math.ceil(secondsInput % 60);

    return hours
        ? `${hours}:${assureTwoChars(minutes)}:${assureTwoChars(seconds)}`
        : `${minutes}:${assureTwoChars(seconds)}`;
};

export const timeToSeconds = (timeInput) => {
    const splitTime = timeInput.split(':');

    const timeNums = splitTime.map((element) => Number(element));

    if (timeNums.length === 3) {
        const hourSeconds = Number(timeNums[0]) * 3600;
        const minsSeconds = Number(timeNums[1]) * 60;
        const seconds = Number(timeNums[2]);

        return hourSeconds + minsSeconds + seconds;
    } else {
        const minsSeconds = Number(timeNums[0]) * 60;
        const seconds = Number(timeNums[1]);

        console.log(`No hours ${minsSeconds + seconds}`);
        return minsSeconds + seconds;
    }
};

export const secondsToPaceString = (secondsInput) => {
    console.log(`secondsToPace input: ${secondsInput}`);
    const minutes = Math.floor(secondsInput / 60);
    const seconds = Math.ceil(secondsInput % 60);

    return `${minutes}:${assureTwoChars(seconds)}`;
};

const assureTwoChars = (input) => {
    return String(input).length < 2 ? `0${input}` : input;
};
