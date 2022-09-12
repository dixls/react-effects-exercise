import React, { useState, useEffect } from "react";
import axios from "axios";
import GetCardButton from "./GetCardButton";
import Card from "./Card";
import CardGetter from "./CardGetter";


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

    function updateDraw() {
        setDraw(!draw)
    }

    return (
        <div>
            <GetCardButton drawACard={updateDraw} draw={draw} />
            {draw && <CardGetter cards={cards} setCards={setCards} draw={draw} setDraw={setDraw} />}
            {cards.drawnCards.map((card, idx) => <Card key={idx} card={card} />)}
        </div>
    )
}

export default DeckOfCards;