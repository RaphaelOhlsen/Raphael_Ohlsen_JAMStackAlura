import React from 'react';
import { Wrapper } from './styles';
import Text from '../../foundation/Text';

// eslint-disable-next-line react/prop-types
const Avatar = ({ imgUrl }) => (
  <Wrapper>
    <Wrapper.Avatar>
      <img src={imgUrl} alt="Imagem do Avatar" />
    </Wrapper.Avatar>
    <Text
      variant="paragraph1"
      tag="p"
      textAlign="center"
      color="tertiary.main"
      // marginTop="5px"
      margin={{
        xs: '5px',
        md: '',
      }}
    >
      Raphael Ohlsen
    </Text>
  </Wrapper>
);

export default Avatar;
