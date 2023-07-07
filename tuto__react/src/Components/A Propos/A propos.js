import React from "react";
import Banner from "../banner";
import Dropdown from "../Logement/dropdown";


export default function APropos() {
    return (
         <div>
            <Banner />
            <div className="apropos-contenair-dropdown">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            </div>
        </div>
    )
}