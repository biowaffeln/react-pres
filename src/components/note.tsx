import React from "react";
import ReactMarkdown from "react-markdown";

import { Box } from "./base";
import styled from "styled-components";

const Wrapper = styled(Box)`
  h1,
  h2,
  h3 {
    font-weight: bold;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
    line-height: 1.1;
  }
  ul {
    list-style-type: inherit;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 5px;
    line-height: 1.1;
  }
`;

export const Note: React.FC<{ text: string }> = props => (
  <Wrapper className="note" fontFamily="body" fontSize={0}>
    <ReactMarkdown source={props.text} />
  </Wrapper>
);
