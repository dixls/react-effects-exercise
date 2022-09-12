import React from "react";

function GetCardButton({ drawACard, draw }) {
    const clickHandler = (e) => {
        e.preventDefault();
        drawACard();
    }

    return (
        <button onClick={clickHandler} >{draw ? "Stop Drawing" : "Start Drawing"}</button>
    )
}

export default GetCardButton;