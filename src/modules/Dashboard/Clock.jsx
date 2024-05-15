import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-poppins text-[#000000] text-lg pt-2 ml-7">
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Clock;
