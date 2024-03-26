// Create a component with a form
// Has a onSubmit function
// Has a first name field
// Has a last name field
// has a Submit button

import React, {useState, useEffect} from "react";

const Form = () =>  {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = useState("");

    const [myForm, setMyForm] = useState({ abc: 1, xyz: 2 });

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyForm((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    useEffect(() => {
        console.log(myForm);
    }, [myForm]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        
        console.log(myForm);
    };

    return(    
    <form onSubmit={submit}>
        <label htmlFor="firstName"> First Name: </label>
        <input name = "firstName" placeholder="Firstname" 
        // onChange={(event) => setFirstName(event.target.value)}
        onChange={saveFields}
        ></input>
        <br/>
        <label htmlFor="lastName"> Last Name: </label>
        <input name = "lastName" placeholder="Lastname" 
        // onChange={(event) => setFirstName(event.target.value)}
        onChange={saveFields}
        ></input>
        <br/>
        <button>Submit</button>
    </form>
    );
}

export default Form;
