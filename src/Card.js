import React from "react";

function Card ({image, value, suit, code}) {

    return (
        <image src={image} alt={`${value} of ${suit}`} />
    )
}

export default Card;