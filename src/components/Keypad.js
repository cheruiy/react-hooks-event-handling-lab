// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleInput() {
        console.log('Entering password...');
    };
        return (
        <div>
            <input type="password" onChange={handleInput} placeholder="Enterp Password"/>
        </div>
    )
}

export default Keypad;