import {Alert} from "antd"
import { Card, Image,Row } from "antd"
function UserList()
{
    var users = [
        {name:"Dharani",role:"AMTS",img:"userImg.png"},
        {name:"Shalini",role:"AMTS",location:"HYD",img:"userImg.png"}
    ]
    if(users.length === 0)
    {
        return (     
                <Alert message = "Empty"/>
        )
    }
    // return(
    //     <>
    //      {users.map((each) => {
    //         return (
    //             <Alert message={each} type = "success"/>
    //         )
    //          } )}
    //     </>
    // )
    // return(
        
    //     <Row>
    //         {
    //             users.map(user=>
    //                 {
    //                     return (
    //                         <Card style={{width:200,margin:10}}>
    //                             <Image src={user.img} height ={150}></Image>
    //                             <h5>{user.name}</h5>
    //                             <h1>{user.role}</h1>
    //                             <h1>{user.location}</h1>
    //                             <br></br>
    //                         </Card>
    //                     )
    //                 }
    //             )
    //         }
    //         </Row>
        
    // )
    return(
        <>
        <Row justify={"space-evenly"}>
            {
                users.map((each)=>
                    {
                        var keys = Object.keys(each)
                        return (
                            <Card style={{width:200}}>
                                <Image src="userImg.png" height ={150}></Image>
                                {
                                    keys.map((
                                        (eachkey)=>{
                                            return <p>{each[eachkey]}</p>
                                        }
                                    ))
                                }
                            </Card>
                        )
                    }
                )
            }
            </Row>
        </>
    )
    
}
export default UserList