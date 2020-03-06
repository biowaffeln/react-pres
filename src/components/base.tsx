import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  flexbox,
  FlexboxProps
} from "styled-system";

type BoxProps = React.HTMLProps<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps & { as?: any };
export const Box = styled.div<BoxProps>(space, color, layout, typography, {
  boxSizing: "border-box"
});

type FlexProps = BoxProps & FlexboxProps;
export const Flex = styled(Box)<FlexProps>(flexbox, {
  display: "flex"
});

export const Heading: React.FC<BoxProps> = props => (
  <Box
    as="h2"
    fontSize={3}
    fontWeight="bold"
    fontFamily="heading"
    lineHeight="0.9"
    mb={4}
    {...props}
  />
);

export const Text: React.FC<BoxProps> = props => (
  <Box as="p" fontFamily="body" fontSize={1} mb={1} {...props} />
);
