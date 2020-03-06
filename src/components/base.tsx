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
  flex,
  FlexProps
} from "styled-system";

type BoxProps = React.HTMLProps<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps & { as?: any };
export const Box = styled.div<BoxProps>(space, color, layout, typography);

type FlexComponentProps = BoxProps & FlexProps;
export const Flex = styled(Box)<FlexComponentProps>(flex, {
  display: "flex"
});

export const Heading: React.FC<BoxProps> = props => (
  <Box as="h2" fontSize={6} fontFamily="heading" {...props} />
);

export const Text: React.FC<BoxProps> = props => (
  <Box as="p" fontFamily="body" {...props} />
);
