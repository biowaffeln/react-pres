import React from "react";
import { Box, Flex } from "./base";

export const TitleSlide: React.FC = props => (
  <Box px={6} height="100vh">
    <Flex justifyContent="center" flexDirection="column" height="100%">
      {props.children}
    </Flex>
  </Box>
);

export const Slide: React.FC = props => (
  <Box px={7} pt={6}>
    {props.children}
  </Box>
);
