/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardInfoWrapper,
  CardDescription,
} from './styles';

export const HighLightCard = ({ size, img, title }) => (
  <Grid.Col value={size}>
    <CardWrapper>
      <CardImage objectFit="cover">
        <Image src={img} layout="fill" />
      </CardImage>
      <CardInfoWrapper>
        <CardTitle>
          <Text
            varian="paragraph1"
            tag="h2"
            textTransform="uppercase"
            letterSpacing="1px"
            color="inherit"
          >
            {title}
          </Text>
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie rhoncus vestibulum. Aenean blandit velit.
        </CardDescription>
      </CardInfoWrapper>
    </CardWrapper>
  </Grid.Col>
);

HighLightCard.propTypes = {
  size: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
  }).isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
