import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, TTheme } from "./components/theme";
import reset from "styled-reset";

const incKeys = ["ArrowRight", "l"];
const decKeys = ["ArrowLeft", "h"];

const Global = createGlobalStyle`
  ${reset}
  body {
    background: ${(props: {theme: TTheme}) => props.theme.colors.background};
  }
`

export const Presentation: React.FC = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [slideIndex, setSlideIndex] = useState(0);

  const inc = () => {
    if (slideIndex == slides.length - 1) return;
    setSlideIndex(i => i + 1);
  };
  const dec = () => {
    if (slideIndex == 0) return;
    setSlideIndex(i => i - 1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (incKeys.includes(e.key)) inc();
      if (decKeys.includes(e.key)) dec();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {slides[slideIndex]}
    </ThemeProvider>
  );
};
