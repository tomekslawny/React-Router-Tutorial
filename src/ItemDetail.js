import "./App.css";
import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id={{${match.params.id}}}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.language}</h1>
    </div>
  );
}

export default ItemDetail;
