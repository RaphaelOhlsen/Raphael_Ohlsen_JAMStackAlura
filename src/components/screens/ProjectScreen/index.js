import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { CardImage, TextLink } from './style';

export default function ProjectInternalPageScreen({ project }) {
  const { title, description, link, image } = project;
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      maxWidth={{ xs: '300px', sm: '370px', md: '550px' }}
      margin="0 auto"
    >
      <Text
        variant="title"
        marginBottom="24px"
        marginTop={{ md: '30px' }}
        color="tertiary.main"
      >
        {title}
      </Text>
      <CardImage objectFit="cover">
        <Image src={image} layout="fill" />
      </CardImage>
      <Box
        marginTop="62px"
        maxWidth={{ xs: '300px', sm: '370px', md: '550px' }}
      >
        {description}
      </Box>
      <Text
        as="p"
        alignSelf="flex-start"
        fontSize="18px"
        fontWeight="700"
        marginTop="36px"
        color="tertiary.main"
        marginBottom="0"
      >
        Visit Website
      </Text>
      <Text
        alignSelf="flex-start"
        marginTop="16px"
        marginBottom="42px"
        tag="a"
        href={link}
        textDecoration="none"
        transition="color 300ms"
        target="_blank"
        rel="noreferrer"
        color="primary.main"
      >
        {link}
      </Text>
    </Box>
  );
}

ProjectInternalPageScreen.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
