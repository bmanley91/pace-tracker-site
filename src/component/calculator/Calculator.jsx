import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

import { distanceRegex, paceRegex, timeRegex } from '../../resources/constants';
import { calculatePace, calulateTime } from '../../util/calculators';
import {
    paceToSeconds,
    secondsToPaceString,
    secondsToTimeString,
    timeToSeconds,
} from '../../util/converters';
import CalculatorField from './CalculatorField';
import { calculatorFields } from './calculator-fields';

const Calculator = (props) => {
    const [distance, setDistance] = useState('');
    const [isDistanceValid, setIsDistanceValid] = useState(true);

    const [pace, setPace] = useState('');
    const [paceSeconds, setPaceSeconds] = useState(null);
    const [isPaceValid, setIsPaceValid] = useState(true);

    const [time, setTime] = useState('');
    const [timeSeconds, setTimeSeconds] = useState(null);
    const [isTimeValid, setIsTimeValid] = useState(true);

    // used to regulate when calculations are made
    const [focusedInput, setFocus] = useState(null);

    const shouldCalcTime = () =>
        focusedInput !== calculatorFields.TIME && isPaceValid;
    const shouldCalcPace = () =>
        focusedInput !== calculatorFields.PACE &&
        focusedInput !== calculatorFields.DISTANCE &&
        isTimeValid;

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

    useEffect(() => {
        if (props.preset) {
            setFocus('distance');
            setPace(props.preset.pace);
            setTime(props.preset.time);
            setDistance(props.preset.distance);
        } else {
            setPace('');
            setTime('');
            setDistance('');
        }
    }, [props.preset]);

    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            style={{ textAlign: 'center' }}
        >
            <Grid item xs={12} md={4}>
                <CalculatorField
                    label="Distance (mi)"
                    field={distance}
                    isFieldValid={isDistanceValid}
                    setIsFieldValid={setIsDistanceValid}
                    fieldTest={(fieldValue) => distanceRegex.test(fieldValue)}
                    setField={setDistance}
                    setFocus={setFocus}
                    fieldName={calculatorFields.DISTANCE}
                    helperText="Distance in miles"
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <CalculatorField
                    label="Pace (min/mi)"
                    field={pace}
                    isFieldValid={isPaceValid}
                    fieldTest={(fieldValue) => paceRegex.test(fieldValue)}
                    setField={setPace}
                    setFocus={setFocus}
                    setIsFieldValid={setIsPaceValid}
                    fieldName={calculatorFields.PACE}
                    helperText="Format mm:ss"
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <CalculatorField
                    label="Time"
                    field={time}
                    isFieldValid={isTimeValid}
                    fieldTest={(fieldValue) => timeRegex.test(fieldValue)}
                    setField={setTime}
                    setFocus={setFocus}
                    setIsFieldValid={setIsTimeValid}
                    fieldName={calculatorFields.TIME}
                    helperText="Format mm:ss or hh:mm:ss"
                />
            </Grid>
        </Grid>
    );
};

export default Calculator;
