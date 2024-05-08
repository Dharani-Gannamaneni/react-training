import { Menu } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"
function NavBar()
{
    var [search,setSearch] = useState();
    var navigate = useNavigate();
    function handleSearch(event)
    {
        setSearch(event.target.value);
    }
    function dosearch()
    {
        navigate('search?name='+search)
    }
    return (
        <nav style={{ backgroundColor: 'pink' }}>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                {/* <Menu.Item key="signUp"><Link to="/signUp">Sign Up</Link></Menu.Item> */}
                <Menu.Item key="login"><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="products"><Link to="/products">Products</Link></Menu.Item>
                <Menu.Item key="admin"><Link to="/admin">Admin</Link></Menu.Item>
                <Menu.Item key="search">
                    <input placeholder="something..." onChange={handleSearch}></input>
                    <button onClick={dosearch} >Search</button>
                     {/* <SearchOutlined onClick={search}></SearchOutlined> */}
                </Menu.Item> 
                <Menu.Item key="cakecart"><Link to="/cakecart">YourCart</Link></Menu.Item>
            </Menu>
        </nav>
    );
}

export default NavBar;
