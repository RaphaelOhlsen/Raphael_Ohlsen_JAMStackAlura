import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding-left: 85px;
  padding-right: 50px;
`;

const AvatarDescription = () => (
  <Wrapper>
    <Text variant="paragraph1" as="p" maxWidth="620px" marginTop="8px">
      Telecommunications engineer returning to the code world. This is
      addictive. I want to learn a lot and support the great code community.
      Here we go!!!!
    </Text>
  </Wrapper>
);

export default AvatarDescription;
