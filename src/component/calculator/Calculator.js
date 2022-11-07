import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import React, { useEffect, useState } from 'react';
import { calculatePace, calulateTime } from '../../util/calculators';
import {
    paceToSeconds,
    secondsToPaceString,
    secondsToTimeString,
    timeToSeconds,
} from '../../util/converters';

const Calculator = () => {
    const [distance, setDistance] = useState('');

    const [pace, setPace] = useState('');
    const [paceSeconds, setPaceSeconds] = useState(null);
    const [isPaceValid, setIsPaceValid] = useState(true);

    const [time, setTime] = useState('');
    const [timeSeconds, setTimeSeconds] = useState(null);
    const [isTimeValid, setIsTimeValid] = useState(true);

    // used to regulate when calculations are made
    const [focusedInput, setFocus] = useState(null);

    const shouldCalcTime = () => focusedInput !== 'time';
    const shouldCalcPace = () =>
        focusedInput !== 'pace' && focusedInput !== 'distance';

    const paceRegex = new RegExp('([0-9]{1,2}):([0-5][0-9])?');
    const timeRegex = new RegExp('([0-9]{1,2}):([0-5][0-9])(:[0-9]{2})?');

    useEffect(() => {
        // If pace and distance exist and user isnt changing time, calculate time
        if (pace && distance && shouldCalcTime()) {
            setPaceSeconds(paceToSeconds(pace));
            setTime(secondsToTimeString(calulateTime(paceSeconds, distance)));
        }

        // If time and distance exist and user isnt changing pace, calculate pace
        if (time && distance && shouldCalcPace()) {
            setTimeSeconds(timeToSeconds(time));
            setPace(secondsToPaceString(calculatePace(timeSeconds, distance)));
        }
    }, [distance, pace, time]);

    return (
        <Box
            component="form"
            alignItems="center"
            justifyContent="center"
            display="flex"
        >
            <TextField
                sx={{ mx: 2 }}
                label="Distance (mi)"
                value={distance}
                onChange={(event) => {
                    setDistance(event.target.value);
                }}
                onFocus={() => setFocus('distance')}
                helperText="Distance in miles"
            />
            <TextField
                sx={{ mx: 2 }}
                label="Pace (min/mi)"
                value={pace}
                onChange={(event) => {
                    if (paceRegex.test(event.target.value)) {
                        setIsPaceValid(true);
                    } else {
                        setIsPaceValid(false);
                    }
                    setPace(event.target.value);
                }}
                onFocus={() => setFocus('pace')}
                error={!isPaceValid}
                helperText="Format mm:ss"
            />
            <TextField
                sx={{ mx: 2 }}
                label="Time"
                value={time}
                onChange={(event) => {
                    if (timeRegex.test(event.target.value)) {
                        setIsTimeValid(true);
                    } else {
                        setIsTimeValid(false);
                    }
                    setTime(event.target.value);
                }}
                error={!isTimeValid}
                onFocus={() => setFocus('time')}
                helperText="Format mm:ss or hh:mm:ss"
            />
        </Box>
    );
};

export default Calculator;