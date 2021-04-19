import React from "react";
import './ProfilInfos.css';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core";

function ProfilInfos() {
    return (
<div className="profil-infos">               
    <div className="grid-container">
    <div className="picture">
            <img className="avatar" src="./assets/avatar2.png" alt="avatar"/>
        </div>
        <div className="formation">Developper</div>
        <div className="language">JS Lover</div>
        <div className="wild-year">Wilder since 2021</div>
        <div className="name">Name</div>
        <div className="city">Bordeaux</div>
        <div className="age">Age</div>
    </div>
        <div className="button-container">
            <button className="modification-button">
                <EditIcon />
            </button>
        </div>
</div>
    )
}

export default ProfilInfos;