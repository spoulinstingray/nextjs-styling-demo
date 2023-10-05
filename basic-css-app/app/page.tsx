"use client";
import { useState } from "react";

import {
  ButtonTypography,
  PrimaryButton,
  SecondaryButton,
} from "../src/components/shared/Button";

import css from "./page.module.css";

const RootPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={css.pageContainer}>
      <div className={css.buttonColumn}>
        <h1>Primary and Secondary Buttons</h1>
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
      <div className={css.buttonColumn}>
        <h1>Buttons with ButtonTypography</h1>
        <PrimaryButton onClick={() => setCounter(counter + 1)}>
          <ButtonTypography>counter {counter}</ButtonTypography>
        </PrimaryButton>
        <PrimaryButton disabled onClick={() => setCounter(counter + 1)}>
          <ButtonTypography>counter {counter}</ButtonTypography>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default RootPage;
