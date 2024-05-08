import { useParams } from "react-router-dom";
import {Users} from './Users';


function EditUSer()
{
    var params = useParams()
    var userid = params.userid
    var user = Users.filter((each)=>{
        return each.id == Number.parseInt(userid)
    })[0]
    var keys = Object.keys(user)
    return(
        <>
        {keys.map((each)=>{
            return(
                <li>{each}: {user[each]}</li>
            )
        })}
        <h1>{userid} something to edit</h1>

        </>
    )
}
export default EditUSer;