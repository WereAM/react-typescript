import React, { useState} from "react";

const Login = () => {

    const [userName, setUserName] = React.useState(" ");
    const [password, setPassword] = React.useState(" ");

    const login = (event : any) => {
        event.preventDefault();
        console.log(event.target.userName.value);
        setUserName("");
        setPassword("");
    };

    return(
        <form onSubmit={login}>
            <label htmlFor="userName"> User Name:</label>
            <br/>
            <input name="userName" placeholder="User Name"></input>
            <br/>
            <label htmlFor="password"> Password:</label>
            <br/>
            <input name="password" placeholder="Password" type="password"></input>
            <br/>
            <button>Login</button>
        </form>
    );
}

export default Login;