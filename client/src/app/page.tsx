"use client";

import React, { useState, useEffect } from "react";

const BookLapLandingPage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setText(data.message));
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <p>Welcome to BookLap, the best place to buy and sell used books.</p>
    </div>
  );
};

export default BookLapLandingPage;
