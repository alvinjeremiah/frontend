import React, { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './LoginSignup.css'


function LoginSignup() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/api/auth/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    localStorage.setItem("user", JSON.stringify({ email }));
                    history("/", { replace: true, state: { id: email } });

                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form onSubmit={submit}>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">New Account</Link>

        </div>
    )
}

export default LoginSignup