import React, { useState } from 'react';

const Stationery = () => {
    const options = ["pen", "pencil", "paper", "eraser", "sharpener"];

    const [stationery, setStationery] = useState<string>("");

    return(
        <>
        <div>Stationery: {stationery}</div>
        <br/>
        {options.map((value) => (
            <div>
            <button onClick={() => setTimeout(() => setStationery(value), 500)}>{value} </button>
            <br/>
            </div>
        ))}
        </>
    )
}

export default Stationery;