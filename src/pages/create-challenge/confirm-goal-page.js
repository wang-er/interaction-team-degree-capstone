import React, { useState } from "react";

const ConfirmGoalPage = (props) => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <h1 class="create-challenge-title">Confirm your goal.</h1>
      <p class="create-challenge-text">
        Make sure all your info is correct, then you can set up your payment
        method and deposit your money into your piggybank.
      </p>
      <h1 class="create-challenge-title">Your goal.</h1>
      <h1 class="create-challenge-title">Your reward.</h1>
    </>
  );
};

export default ConfirmGoalPage;
