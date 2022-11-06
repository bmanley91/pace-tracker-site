import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import React, { useState } from 'react';

const Calculator = () => {
    const [distance, setDistance] = useState('');
    const [pace, setPace] = useState('');
    const [time, setTime] = useState('');

    return (
        <Box component="form">
            <TextField
                label="Distance"
                value={distance}
                defaultValue="Enter Distance"
                onChange={(event) => {
                    setDistance(event.target.value);
                }}
            />
            <TextField
                label="Pace"
                value={pace}
                defaultValue="Enter Pace"
                onChange={(event) => {
                    setPace(event.target.value);
                }}
            />
            <TextField
                label="Time"
                value={time}
                defaultValue="Enter Total Time"
                onChange={(event) => {
                    setTime(event.target.value);
                }}
            />
        </Box>
    );
};

export default Calculator;
