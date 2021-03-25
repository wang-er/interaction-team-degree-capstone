import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";

const MotivePage = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <h1 class="create-challenge-title">
        Why do you want to accomplish this goal?
      </h1>
      <p class="create-challenge-text">
        Thinking about your motive will help you stick with your goal!
      </p>
      <Textarea
        colorScheme="whiteAlpha"
        width="90%"
        placeholder="Write as much (or as little) as you want."
      />
    </>
  );
};

export default MotivePage;
