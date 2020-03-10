import React from "react";
import { Box, Flex, BoxProps, Heading } from "./base";

export const TitleSlide: React.FC = props => (
  <Box px={6} height="100vh">
    <Flex justifyContent="center" flexDirection="column" height="100%">
      {props.children}
    </Flex>
  </Box>
);

export const Slide: React.FC = props => (
  <Box px={7} pt={6} height="100vh">
    {props.children}
  </Box>
);

type ImgSlideProps = {
  url: string;
  brightness?: string | number;
};

export const ImgSlide: React.FC<ImgSlideProps> = props => (
  <Box px={6} height="100vh">
    <Box
      background={`url(${props.url}) no-repeat center center fixed`}
      backgroundSize="cover"
      width="100vw"
      height="100vh"
      position="absolute"
      zIndex={-1}
      top={0}
      left={0}
      filter={`brightness(${props.brightness ?? 0.5}) grayscale(1)`}
    />
    <Flex justifyContent="center" flexDirection="column" height="100%">
      {props.children}
    </Flex>
  </Box>
);

export const ImgHeading: React.FC<BoxProps> = props => (
  <Heading
    fontSize={4}
    color="textInverted"
    mb={0}
    textAlign="center"
    mx="auto"
    {...props}
  />
);
