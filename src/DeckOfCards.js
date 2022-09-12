import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import GetCardButton from "./GetCardButton";

function DeckOfCards() {
    const newDeckUrl = "http://deckofcardsapi.com/api/deck/new/shuffle/";
    const [cards, setCards] = useState({
        deckId: "",
        drawnCards: []
    });
    const [draw, setDraw] = useState(false)

    useEffect(function getDeckIdWhenMounted() {
        async function getDeckId() {
            const res = await axios.get(newDeckUrl);
            setCards({ deckId: res.data.deck_id, drawnCards: [] })
        }
        getDeckId();
    }, []);

    useEffect(function drawACardOnButtonClick() {
        async function drawACard() {
            if (cards.deckId) {
                let res = await axios.get(`http://deckofcardsapi.com/api/deck/${cards.deckId}/draw/`);
                if(res.data.success) {
                    setCards({ deckId: cards.deckId, drawnCards: [...cards.drawnCards, { ...res.data.cards[0] }] })
                }
                else{
                    alert("No more cards!")
                    // http://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
                }
            }
        }
        drawACard();
    }, [draw]);

    function updateDraw() {
        setDraw(!draw)
    }

    return (
        <div>
            <GetCardButton drawACard={updateDraw} />
            {cards.drawnCards.map((card, idx) => <Card key={idx} card={card} />)}
        </div>
    )
}

export default DeckOfCards;