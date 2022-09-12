import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import DrawButton from "./DrawButton";
import axios from "axios";

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
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/${cards.deckId}/draw/`);
            setCards({ cards: cards.deckId, drawnCards: [...cards.drawnCards, { ...res.data.cards }] })
        }
        drawACard();
    }, [draw]);

    function updateDraw() {
        setDraw(!draw)
    }

    return (
        <div>
            <DrawButton drawACard={updateDraw} />
            {cards.drawnCards.map((card, idx) => <Card key={idx} image={image} alt={[value, suit]} />)}
        </div>
    )
}

export default DeckOfCards;