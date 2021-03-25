import React, { useState } from "react";
import Picture from "../../components/gallery";

const CreateRewardPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <h1 class="create-challenge-title">Let’s motivate you with a reward.</h1>
      <p class="create-challenge-text">
        Specify a reward and how much money you will spend on it. You can also
        input $0 for a non-monetary reward.
      </p>
      <Picture />
      <form>
        <p>
          I will <input type="text" name="reward-name" /> {"\n"}
          {"\n"}
          with $
          <input type="text" size="8" name="reward-amount" />
          {"\n"}
        </p>
      </form>
    </>
  );
};

export default CreateRewardPage;
