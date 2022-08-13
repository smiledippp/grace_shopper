import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="navLinks">
                <a href="/">
                    <div className="textLink">Home</div>
                </a>
                <a href="/login">
                    <div className="textLink">Login</div>
                </a>
                <a href="/cart">
                    <div className="textLink">Cart</div>
                </a>
            </div>
        </div>
    );
}

export default Header;