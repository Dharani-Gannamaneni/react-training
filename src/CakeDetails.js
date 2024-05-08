import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Space,Button } from "antd";
export default function Cakedetail(){
    var params = useParams() //using params hook function to get parameter values from link
    var cakeid = params.cakeid;
    var [cake, setCake] = useState({});
    // we are taking cake details from backend using cakeid
    useEffect(() => {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cake/"+cakeid,
            method: "get"
        }).then(
            (response) => {
                setCake(response.data.data);
            }, (error) => {
                console.log("no cake data found", error)
            }
        )
    },[])


    
function addToCart(){
    var requestJson = {
        name:cake.name,
        cakeid:cake.cakeid,
        price:cake.price,
        image:cake.image,
        weight:1,
    }
    axios({
        url:"http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
        method:"post",
        data:requestJson,
        headers:{
            Authorization:localStorage.token// that token which u got while logiing in
            //Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRoYXJhbmlyYW9nYW5uYW1hbmVuaUBnbWFpbC5jb20iLCJpYXQiOjE3MTQ5NzYxODB9.s90LFrMD99C2Kvr2FgWtw6jsK2BcemGvmBYaMfAjtwg"
        }
    })
}
    return (
        <>
        <Space direction="horizontal" style={{paddingLeft:100 , paddingTop:50}}>
            <img src={cake?.image} style={{height:250 , width:250}}/>
            <ul>
                <li>Id:{cake?.cakeid}</li>
                <li>Name : {cake?.name}</li>
                <li>Price : {cake?.price}</li>
                <li><Button type="primary" onClick={addToCart}>Add to Cart</Button></li>
            </ul>
        </Space>
        </>
    );
}