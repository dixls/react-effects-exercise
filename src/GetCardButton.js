import React from "react";

function GetCardButton({ drawACard }) {
    const clickHandler = (e) => {
        e.preventDefault();
        drawACard();
    }

    return (
        <button onClick={clickHandler} >Draw a Card</button>
    )
}

export default GetCardButton;