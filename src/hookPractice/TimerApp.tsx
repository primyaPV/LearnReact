import React, { useEffect, useState } from 'react'

export const TimerApp = () => {
    const [time, setTime] = useState(0);
    //console.log("Time",time);
    useEffect(() => {
        // Set up an interval to increment the time every second
        console.log("this time useEffect",time);
        
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

       
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div>
            <h1>Timer Application</h1>
            <h1>Timer: {time} seconds</h1>
        </div>
    );
};

