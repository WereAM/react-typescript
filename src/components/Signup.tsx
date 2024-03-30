import React, {useState, useEffect} from "react";

const Signup = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [signupForm, setSignupForm] = useState({});

    const saveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupForm((previous) => ({
            ...previous,
            [e.target.name] : e.target.value,
        }));
    };

    useEffect(() => {
        console.log(signupForm);
    }, [signupForm]);

    const signup = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(signupForm);
    }

    return(
        <form onSubmit={signup}>
            <label htmlFor="firstName"> First Name: </label>
            <input name="firstName" placeholder="First Name" onChange={saveFields}></input>
            <br/>
            <label htmlFor="lastName"> Last Name: </label>
            <input name="lastName" placeholder="Last Name" onChange={saveFields}></input>
            <br/>
            <label htmlFor="userName"> User Name: </label>
            <input name="userName" placeholder="User Name" onChange={saveFields}></input>
            <br/>
            <label htmlFor="password"> Password: </label>
            <input name="password" placeholder="Password" type="password" onChange={saveFields}></input>
            <br/>
            <button> Signup </button>
        </form>
    )
}

export default Signup;