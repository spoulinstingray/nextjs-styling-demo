import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

import {
  ButtonTypography,
  PrimaryButton,
  SecondaryButton,
  TypographyButton,
} from "../components/shared/Button";

// Elements that will be used in the jsx will now have names, instead of just having a bunch of div, p, span with classnames
const PageContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
`;

const ShowcaseColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const Title = styled.h1`
  color: black;
`;

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <PageContainer>
      <Head>
        <title>Next.js w/ Styled Components Showcase</title>
        <meta
          name="description"
          content="Next.js w/ Styled Components Showcase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ShowcaseColumn>
          <Title>Primary and Secondary buttons</Title>
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
        </ShowcaseColumn>
        <ShowcaseColumn>
          <Title>TypographyButtons with ButtonTypography</Title>
          <TypographyButton onClick={() => setCounter(counter + 1)}>
            <ButtonTypography>counter {counter}</ButtonTypography>
          </TypographyButton>
          <TypographyButton disabled onClick={() => setCounter(counter + 1)}>
            <ButtonTypography>counter {counter}</ButtonTypography>
          </TypographyButton>
        </ShowcaseColumn>
      </Main>
    </PageContainer>
  );
}
