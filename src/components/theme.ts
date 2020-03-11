export const theme = {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Apercu, sans-serif"
  },
  fontSizes: ["1.25rem", "1.75rem", "2.25rem", "3.5rem", "4.5rem"],
  space: [0, "0.5rem", "1rem", "2rem", "3rem", "5rem", "7rem", "10rem"],
  colors: {
    text: "#222",
    textInverted: "#fff",
    background: "#f3f4f4"
  },
  lineHeights: [1, 1.2],
  shadows: [
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  ]
};

export type TTheme = typeof theme;
