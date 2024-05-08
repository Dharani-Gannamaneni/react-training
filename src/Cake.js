import { Badge, Card, Image} from "antd";
import {Link} from "react-router-dom";
function Cake(props)
{
    // var data ={
    //     name: "cake",
    //     price : 650,
    //     image : "cake.png"
    // }
    // return (
    //     <Badge.Ribbon text="BestSeller" color="green">
    //     <Card style={{width: 300,height:20}}>
    //         <Image src={props.data.image}></Image>
    //         <p>{props.data.name}</p>
    //         <p>{props.data.price}</p>
    //   </Card>
    //   </Badge.Ribbon>
    // )

    var tag
    if(props.data.tag)
    {
        tag=<p>{props.data.tag}</p>
    }
    else{
        tag = null
    }
    return (
        <Card style={{width: 300,height:"auto"}}>
            <Link to={"/details/"+props.data.cakeid}><Image src={props.data.image} preview={false} height={200}></Image></Link>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
            {/* {props.data.tag && <p>props.data.tag</p>} */}
       </Card>
    )
}
export default Cake;