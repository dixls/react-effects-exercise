import React from "react";

function Card({card}) {

    return (
        <img src={card.image} alt={`${card.value} of ${card.suit}`} style = {{display: "block", width:"226px", height:"314px"}} />
    )
}

export default Card;