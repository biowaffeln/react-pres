import React, { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import createPersistedState from "use-persisted-state";
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
  slides.map(slide => {
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

const useSlideState = createPersistedState("slideIndex");

export const Presentation: React.FC = ({ children }) => {
  const slides = React.Children.toArray(children);
  const notes = mapToNotes(slides);
  const [slideIndex, setSlideIndex] = useSlideState(0);

  /* useEffect(() => { */
  /*   setSlideIndex(0); */
  /* }, []); */

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
      <Route path="/">
        <Box height="100vh">{slides[slideIndex]}</Box>
      </Route>
      <Route path="/notes">
        <Flex height="100vh">
          <Box width={3 / 4}>{slides[slideIndex]}</Box>
          <Box
            className="notes"
            width={1 / 4}
            minWidth={350}
            background="#fff"
            p={3}
            boxShadow={1}
          >
            {notes[slideIndex]}
          </Box>
        </Flex>
      </Route>
    </ThemeProvider>
  );
};
