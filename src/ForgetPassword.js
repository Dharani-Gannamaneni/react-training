import { Link } from "react-router-dom";

function ForgetPassword()
{
    return (
        <>
        <h1> Reset Password </h1>
        <form>
            <input placeholder="Enter Email" ></input>
            <br></br>
            <input placeholder="Enter password"></input>
        </form>
        <button > Reset Password </button>
        </>
    )
}
export default ForgetPassword;
