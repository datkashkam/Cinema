import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <Link to={"/"}><h1>DATOSH</h1></Link>

                    <div className="header--nav">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/populari"}>Populari</NavLink>
                        <NavLink to={"/topRated"}>Top Rated</NavLink>
                    </div>
                    <div className="header--search">
                        <input type="text" placeholder="Search" className="header--search__sear"/>
                        <button className="header--search__searbt">Search</button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;