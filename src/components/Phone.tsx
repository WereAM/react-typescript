import React, {useState} from "react";
import Android from "./Android";

const Phone = () => {
    const [model, setModel] = useState("Z flip 5");

    return < Android model = {model} />;
};

// const Android = ({model} : PhoneProps) => {
//     return < Samsung model = {model} />;
// };

// const Samsung = ({model} : PhoneProps) => {
//     return < FlipPhone model = {model} />;
// };

// const FlipPhone = ({model} : PhoneProps) => {
//     return <div>{model}</div>;
// };

export default Phone;