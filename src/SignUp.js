import { useState } from "react";
import axios  from "axios";
function SignUp() {
    var user ={}
   var [users,setUsers] = useState([])
    function handleClick() {
      alert('You are logged in ');
    }
    function deleteUser(index){
        users.splice(index,1)
        setUsers([...users])
    }
    function handleName(event)
    {
        user.name = event.target.value;
    }
    function handlePassword(event)
    {
        user.password = event.target.value;
    }
    function handleEmail(event)
    {
        user.email = event.target.value;
    }
    function createAccount() {
        console.log("User details" , user)
        // users = [...users,user]
        // setUsers(users)

        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:user
        }).then((response)=> {
            console.log("Response",response)
        },(error)=>{
            console.log("Error",error)
        })

    }
    return(
       <>
        <div>
        <h1> Please SignUp </h1>
            <div>
                <input placeholder="Enter EmailId" onChange={handleEmail}></input>
            </div>
            <div>
                <input placeholder="Enter Username" onChange={handleName}></input>
            </div>
            <div>
                <input placeholder="Enter password" onChange={handlePassword}></input>
            </div>
        <button onClick={createAccount}> createAccount </button>
        </div>
        
     </>
    );
  }
  export default SignUp;