import React from "react";
import { Presentation } from "./presentation";
import { Heading, Text } from "./components/base";
import { TitleSlide, Slide, ImgSlide } from "./components/layouts";
import { Note } from "./components/note";

export const Slides = () => (
  <Presentation>
    <TitleSlide>
      <Heading as="h1" fontSize={4}>
        Example Heading for a cool Presentation
      </Heading>
      <Text fontSize={2}>React-Pres</Text>
      <Text fontSize={2}>Mark Kvetny</Text>
    </TitleSlide>
    <Slide>
      <Heading>This is a title</Heading>
      <Note
        text={`
# Hello

at this point I wanted to say this

remind me to do this and that
here's a list:
- cool lorem iaksjd asdlask dlaskdj laskdj lksdj asjdh

`}
      />
    </Slide>
    <Slide>
      <Heading>Another Title</Heading>
      <Text>with some text</Text>
    </Slide>
    <Slide>
      <Text fontSize={0}>Hello</Text>
      <Text fontSize={1}>Hello</Text>
      <Text fontSize={2}>Hello</Text>
      <Heading fontSize={3} mb={1}>
        hello
      </Heading>
      <Heading fontSize={4} mb={1}>
        hello
      </Heading>
    </Slide>
    <ImgSlide url="https://images.unsplash.com/photo-1503942142281-94af0aded523">
      <Heading color="#eee" mb={0}>
        slide with a nice, darkened image
      </Heading>
    </ImgSlide>
  </Presentation>
);
