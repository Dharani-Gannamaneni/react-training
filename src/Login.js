import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Alert} from "antd"
import axios from "axios"
function Login()
{
    var navigate = useNavigate();
    var [error,setError] = useState(null);
    var [email, setEmail] = useState("");
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    function signIn(email,username,password)
    {
        // if(username === "test" && password === "test")
        // {
        //     navigate('/home')
        // }
        // else
        // {
        //     setError("Invalid credentials")
        // }
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:{email:email,password:password}
        }).then((response)=> {
            console.log("Response",response)
            localStorage.token=response.data.token
            navigate('/')
            //navigate('/cakecart')
        },(error)=>{
            console.log("Error",error)
        })
    }
    return (
        <>
        <h1> Please Login </h1>
        <form>
            {error && <Alert type="danger" message={error}/>}
            <input placeholder="Enter EmailId" value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <input placeholder="Enter Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}></input>
            <br></br>
            <input placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
        </form>
        <Link to='/signUp'>New User? SignUp from here</Link>
        <Link to='/forgetPassword'>Forget Password?</Link>
        <br></br>
        <button onClick={() => signIn(email, username, password)}>Login</button>
        </>
    )
}
export default Login;
