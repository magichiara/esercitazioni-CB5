import "./fetch.scss";
import { useState, useEffect } from "react";

const ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get CREDIT_CARDS() {
    return `${this.BASE}/credit_cards`;
  },
};

export const Fetch = () => {
  const [randomCard, setRandomCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewCard = () => {
    setLoading(true);
    setError(null);

    fetch(ENDPOINT.CREDIT_CARDS)
      .then((res) => res.json())
      .then((card) => {
        setRandomCard(card);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchNewCard();
    return () => console.log("fetch");
  }, []);

  if (loading) {
    return "Loading...";
  }

  if (error || !randomCard) {
    return "Error connecting to server, try reloading the page";
  }

  const { credit_card_number, credit_card_expiry_date, credit_card_type } =
    randomCard;

  return (
    <div className="card-wrapper">
      <div className="credit-card">
        <div className="logo"></div>
        <h3>{credit_card_type}</h3>
        <h3>{credit_card_number}</h3>
        <h3>{credit_card_expiry_date}</h3>
      </div>
      <button className="card-btn" onClick={() => fetchNewCard()}>
        GET CREDIT CARD
      </button>
    </div>
  );
};
