"use client";
import { useState } from "react";

import {
  ButtonTypography,
  PrimaryButton,
  SecondaryButton,
} from "@/src/components/shared/Button";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1>Primary and Secondary buttons</h1>
        <PrimaryButton onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </PrimaryButton>
        <PrimaryButton disabled onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </PrimaryButton>
        <SecondaryButton onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </SecondaryButton>
        <SecondaryButton disabled onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </SecondaryButton>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1>TypographyButtons with ButtonTypography</h1>
        <PrimaryButton onClick={() => setCounter(counter + 1)}>
          <ButtonTypography>counter {counter}</ButtonTypography>
        </PrimaryButton>
        <PrimaryButton disabled onClick={() => setCounter(counter + 1)}>
          <ButtonTypography>counter {counter}</ButtonTypography>
        </PrimaryButton>
      </div>
    </main>
  );
};

export default Home;
