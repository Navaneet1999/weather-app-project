import React from "react";
import Search from "../search/search";

import "./header.css";

export default function Header({ searchCity }) {
    return ( 
        <header className = "Header" >
            <Search searchCity = { searchCity }/>
        </header>
    );
}