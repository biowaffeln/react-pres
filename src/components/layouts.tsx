import React from 'react';
import { Box, Flex } from './base';

export const TitleSlide: React.FC = (props) => (
	<Box px={6} height="100vh">
		<Flex justifyContent="center" flexDirection="column" height="100%">
			{props.children}
		</Flex>
	</Box>
);

export const Slide: React.FC = (props) => (
	<Box px={7} pt={6}>
		{props.children}
	</Box>
);

type ImgSlideProps = {
  url: string
}

export const ImgSlide: React.FC<ImgSlideProps> = (props) => (
	<Flex justifyContent="center" alignItems="center" height="100vh">
		<Box
      background={`url(${props.url}) no-repeat center center fixed`}
      backgroundSize="cover"
			width="100vw"
			height="100vh"
      position="absolute"
      zIndex={-1}
			top={0}
      left={0}
      style={{
        filter: "brightness(50%)"
      }}
		/>
		{props.children}
	</Flex>
);
