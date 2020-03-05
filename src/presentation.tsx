import React, { useState, useEffect } from "react";

type Props = {
  theme?: "light" | "dark";
};

const incKeys = ["ArrowRight", "l"];
const decKeys = ["ArrowLeft", "h"];

export const Presentation: React.FC<Props> = ({
  children,
  theme = "light"
}) => {
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
  return <div className={`presentation ${theme}`}>{slides[slideIndex]}</div>;
};
