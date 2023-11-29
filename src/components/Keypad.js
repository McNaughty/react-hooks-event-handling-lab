// Code Keypad Component Here
import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function Keypad (){

    // const [usePassword, setPassword] = {useState}

function handleChange(){
    // console.log(event.target.value)
    console.log('Entering password...')
}

    return (
        <div>
            <input type="password" placeholder="Enter password.." onChange={handleChange}/>
        </div>
    )
}

export default Keypad;