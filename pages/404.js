import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '../src/components/foundation/layout/Box';

const colorAnimation = keyframes`
	0% {
		color: #ccfff1;
	}
	25% {
		color: #99ffe5;
	}
	50% {
		color: #64FFDA;
	}
	75% {
		color: #32ffcc;
	}
	100% {
		color: #00ffbf;
	}

`;

const Error = styled.p`
  font-size: 180px;
  margin: 0;
  animation-name: ${colorAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const Message = styled.p`
  font-size: 40px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary.main.color};
`;

export default function Page404() {
  return (
    <Box display="flex" flex="1" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Error variant="title">404</Error>
        <Message variant="title">It looks like you&lsquo;re lost.</Message>
      </Box>
    </Box>
  );
}
