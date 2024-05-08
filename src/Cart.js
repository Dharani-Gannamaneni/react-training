//get the details of cakes which are added to cart

import { useEffect, useState } from "react"
import axios from "axios"
import { Space,Button } from "antd";
function Cart()
{
    var [cartItems,setCartItems] = useState([]);
    useEffect(()=>{
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart",
            method:"get",
            headers:{
                Authorization:localStorage.token// that token which u got while logiing in
                //Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRoYXJhbmlyYW9nYW5uYW1hbmVuaUBnbWFpbC5jb20iLCJpYXQiOjE3MTQ5NzYxODB9.s90LFrMD99C2Kvr2FgWtw6jsK2BcemGvmBYaMfAjtwg"
            }
        }).then((response)=>{
            console.log("Cart items response:", response.data);
            setCartItems(response.data.data)
        })
    },[])
   // console.log("Cart items response123:", cartItems.toString())
    function removeItemFromCart(cakeid)
    {
        setCartItems(cartItems.filter((item)=> item.cakeid!=cakeid))
    }
    // if(!cartItems)
    // {

    // }
    return (
        <>
            <h1>Your Cart</h1>
            <Space direction="vertical" style={{ paddingLeft: 100, paddingTop: 50 }}>
                {cartItems.map((item) => (
                    <div key={item._id}>
                        <img src={item.image} alt={item.name} style={{ height: 250, width: 250 }} />
                        <ul>
                            <li>Id: {item.cakeid}</li>
                            <li>Name: {item.name}</li>
                            <li>Price: {item.price}</li>
                        </ul>
                        <Button type="primary" onClick={()=>removeItemFromCart(item.cakeid)}>Remove</Button>
                    </div>
                ))}
            </Space>
        </>
    );
    
    
}
export default Cart;