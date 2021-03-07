import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Wrapper } from './styles';
import Text from '../../foundation/Text';

const Avatar = ({ imgUrl }) => (
  <Wrapper>
    <Wrapper.Avatar objectFit="contain">
      <Image src={imgUrl} layout="fill" />
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

Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Avatar;
