import React, { useEffect, useState } from "react";
import "./Game.css";
import Question from "../Question/Question";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";
import { getData } from "../../GraphQL/ApiCall";
import { createCategoryQuery } from "../../GraphQL/Mutations";

function Game() {
  const [deckID, setDeckID] = useState(0);
  const [error, setError] = useState("");
  const categories = ["animals", "instruments", "machines", "misc"];
  const difficulties = ["easy", "medium", "hard"];
  const navigate = useNavigate();

  let location = useLocation().pathname.split("/");

  useEffect(() => {
    if (
      !categories.includes(location[1]) ||
      !difficulties.includes(location[2])
    ) {
      navigate("/404");
    }

    const categoryQuery = createCategoryQuery(location[1], location[2]);

    getData(categoryQuery)
      .then((data) => {
        setDeckID(data.data.createDeck.deck.id);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="question-container">
      {error ? (
        <ErrorDisplay errorCode="500" />
      ) : deckID ? (
        <Question deckID={deckID} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Game;
