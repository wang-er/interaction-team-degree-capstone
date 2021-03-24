import React, { useState } from "react";
import styled from "styled-components";
import Picture from "../../components/gallery";

const SetUpGoalPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <h1 class="create-challenge-title">Let’s set up a goal.</h1>
      <p class="create-challenge-text">
        Swipe through some ideas if you can’t think of anything.
      </p>
      <Picture />
      <p>I want to times a My ideal end date is:</p>
    </>
  );
};

export default SetUpGoalPage;
