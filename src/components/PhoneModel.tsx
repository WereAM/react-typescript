import React, {useContext} from "react";

import { PhoneContext } from "../context/PhoneContext";

const PhoneModel =  () => {
    // const {model, changeModel} = useContext(PhoneContext);

    // const handleChange = () => {
    //     changeModel();
    // }

    return(
        <PhoneContext.Consumer>
            {({model, changeModel}) => (
                <div>
                   <p>Current Model: {model}</p>
                   <button onClick={() => changeModel()}>Change Model</button> 
                </div>
            )}
        {/* <p>Current Model: {model}</p>
        <button onClick={handleChange}>Change Model</button> */}
        </PhoneContext.Consumer>
    ) 
}

export default PhoneModel;