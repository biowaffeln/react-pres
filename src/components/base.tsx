import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  typography,
  background,
  shadow,
  border,
  borderRadius,
  BackgroundProps,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  flexbox,
  FlexboxProps,
  PositionProps,
  position,
  system,
  ShadowProps,
  BorderRadiusProps,
  BorderProps
} from "styled-system";

const filter = system({ filter: true });

export type BoxProps = React.HTMLProps<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  PositionProps &
  ShadowProps &
  BorderProps &
  BorderRadiusProps &
  TypographyProps & { filter?: string };
export const Box = styled.div<BoxProps>(
  space,
  color,
  layout,
  background,
  typography,
  position,
  shadow,
  border,
  borderRadius,
  filter,
  {
    boxSizing: "border-box"
  }
);

export type FlexProps = BoxProps & FlexboxProps;
export const Flex = styled(Box)<FlexProps>(flexbox, {
  display: "flex"
});

export const Text: React.FC<BoxProps> = props => (
  <Box
    lineHeight={1}
    as={"p" as any}
    color="text"
    fontFamily="body"
    fontSize={1}
    mb={2}
    {...props}
  />
);

export const Heading: React.FC<BoxProps> = props => (
  <Text
    as={"h2" as any}
    fontSize={3}
    fontWeight="bold"
    fontFamily="heading"
    mb={4}
    lineHeight={0}
    {...props}
  />
);

export const Image: React.FC<BoxProps> = props => (
  <Box
    as={"img" as any}
    boxShadow="1px 2px 10px rgba(0,0,0,.12)"
    borderRadius={3}
    {...props}
  />
);

export const Blockquote: React.FC<BoxProps> = props => (
  <Text
    as={"blockquote" as any}
    fontStyle="italic"
    pl={3}
    borderLeftStyle="solid"
    borderLeftWidth={3}
    {...props}
  />
);
