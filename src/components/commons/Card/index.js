/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

import { CardWrapper, CardImage, CardTitle } from './styles';

export const Card = ({ size, img, title }) => (
  <Grid.Col value={size}>
    <CardWrapper>
      <CardImage objectFit="cover">
        <Image src={img} layout="fill" />
      </CardImage>
      <CardTitle>
        <Text
          variant="paragraph1"
          tag="h2"
          textTransform="uppercase"
          letterSpacing="1px"
          color="inherit"
        >
          {title}
        </Text>
      </CardTitle>
    </CardWrapper>
  </Grid.Col>
);
