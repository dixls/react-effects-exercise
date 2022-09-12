import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";

const CardGetter = ({cards, setCards, draw, setDraw}) => {

    useEffect(() => {
        const intervalId = setInterval(() => {
            async function drawACard() {
                if (cards.deckId) {
                    let res = await axios.get(`http://deckofcardsapi.com/api/deck/${cards.deckId}/draw/`);
                    if (res.data.success) {
                        console.log(res.data.cards)
                        setCards({ deckId: cards.deckId, drawnCards: [...cards.drawnCards, { ...res.data.cards[0] }] })
                    }
                    else {
                        setDraw(!draw);
                        alert("No more cards!");
                        // URL to reshuffle existing deck is: http://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
                    }
                }
            }
            drawACard();
        }, 1000)

        return () => clearInterval(intervalId)
    }, [draw]);

    return (
        <p>Drawing!</p>
    )
}

export default CardGetter;