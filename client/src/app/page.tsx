"use client";

import React, { useState, useEffect } from "react";

const BookLapLandingPage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      fetch("http://localhost:8000/venues/my-favorites")
        .then((res) => res.json())
        .then((data) => setText(data.message));
    } catch (error) {
      console.error(error);
    }

    console.log(text);
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <p>Welcome to BookLap, the best place to buy and sell used books.</p>
    </div>
  );
};

export default BookLapLandingPage;
