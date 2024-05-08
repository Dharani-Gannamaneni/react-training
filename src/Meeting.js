import { Button } from "antd"
import { useState } from 'react';

function Meeting()
{
    // function handleClick() {
    //     setCount(count + 1);
    //   }
     //   return (
    //     <button onClick={handleClick}>
    //       Clicked {count} times
    //     </button>
    //   );
    //var users=0;
    var [users,setUsers] = useState(0);
      function joinMeeting()
      {
        //  users = users+1;
        //  console.log(users);
        setUsers(users + 1);
      }
      function clearCount()
      {
        setUsers(0);
      }
    return(
        <>
            <Button onClick={joinMeeting} type="primary">JoinedMeeting</Button>
            <br></br>
            People Joined : <h1>{users}</h1>
            <Button onClick={clearCount} type="primary">ClearCount</Button>
        </>
    )
}
export default Meeting;