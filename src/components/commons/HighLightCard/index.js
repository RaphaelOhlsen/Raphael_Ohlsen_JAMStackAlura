/* eslint-disable react/prop-types */
import React from 'react';
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
      <CardImage img={img} />
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
