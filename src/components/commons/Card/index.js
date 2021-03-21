/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { CardWrapper, CardImage, CardTitle } from './styles';

export const Card = ({ project, size }) => {
  const { title, image } = project;
  return (
    <Grid.Col value={size}>
      <CardWrapper>
        <CardImage objectFit="cover">
          <Image src={image} layout="fill" />
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
};

// Card.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   size: PropTypes.shape({
//     xs: PropTypes.string.isRequired,
//     md: PropTypes.string.isRequired,
//   }).isRequired,
// };
