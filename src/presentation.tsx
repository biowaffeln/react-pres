import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Route } from "wouter";
import { theme, TTheme } from "./components/theme";
import reset from "styled-reset";
import { Box, Flex } from "./components/base";

const incKeys = ["ArrowRight", "l"];
const decKeys = ["ArrowLeft", "h"];

const Global = createGlobalStyle`
  ${reset}
  body {
    background: ${(props: { theme: TTheme }) => props.theme.colors.background};
  }
  .note {
    display: none;
  }
  .notes .note {
    display: inherit;
  }
`;

const isNote = (child: any) =>
  child.hasOwnProperty("type") && child.type.name === "Note";

const mapToNotes = (slides: any[]) =>
  slides.map((slide: any) => {
    try {
      const children = slide.props.children;
      if (Array.isArray(children)) {
        const foundNote = children.find(isNote);
        return foundNote ? foundNote : null;
      } else {
        return isNote(children) ? children : null;
      }
    } catch {
      return null;
    }
  });

export const Presentation: React.FC = ({ children }) => {
  const slides = React.Children.toArray(children);
  const notes = mapToNotes(slides);
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
      <Route path="/">{slides[slideIndex]}</Route>
      <Route path="/notes">
        <Flex>
          <Box width={3 / 4}>{slides[slideIndex]}</Box>
          <Box
            width={1 / 4}
            p={3}
            backgroundColor="#fff"
            boxShadow="1px 2px 5px rgba(0,0,0,.12)"
            className="notes"
          >
            {notes[slideIndex]}
          </Box>
        </Flex>
      </Route>
    </ThemeProvider>
  );
};
