import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import React, { useEffect, useState } from 'react';
import { calculatePace, calulateTime } from '../../util/calculators';
import { paceToSeconds, secondsToTime } from '../../util/converters';

const Calculator = () => {
    const [distance, setDistance] = useState('');
    const [pace, setPace] = useState('');
    const [paceSeconds, setPaceSeconds] = useState(null);
    const [time, setTime] = useState('');
    // const [timeSeconds, setTimeSeconds] = useState(null);
    // used to regulate when calculations are made
    const [focusedInput, setFocus] = useState(null);

    const shouldCalcTime = () => focusedInput !== 'time';
    const shouldCalcPace = () =>
        focusedInput !== 'pace' && focusedInput !== 'distance';

    useEffect(() => {
        // If pace and distance exist and user isnt changing time, calculate time
        if (pace && distance && shouldCalcTime()) {
            setPaceSeconds(paceToSeconds(pace));
            setTime(secondsToTime(calulateTime(paceSeconds, distance)));
        }

        // If time and distance exist and user isnt changing pace, calculate pace
        if (time && distance && shouldCalcPace()) {
            setPace(calculatePace(time, distance));
        }
    }, [distance, pace, time]);

    return (
        <Box component="form">
            <TextField
                label="Distance (mi)"
                value={distance}
                onChange={(event) => {
                    setDistance(event.target.value);
                }}
                onFocus={() => setFocus('distance')}
            />
            <TextField
                label="Pace (min/mi)"
                value={pace}
                onChange={(event) => {
                    setPace(event.target.value);
                }}
                onFocus={() => setFocus('pace')}
            />
            <TextField
                label="Time"
                value={time}
                onChange={(event) => {
                    setTime(event.target.value);
                }}
                onFocus={() => setFocus('time')}
            />
        </Box>
    );
};

export default Calculator;
