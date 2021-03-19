import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { CardWrapper, CardImage, CardTitle } from './styles';
import { WebsitePageContext } from '../../wrappers/WebsitePage/index';

export const Card = ({ project, size }) => {
  const websitePageContext = useContext(WebsitePageContext);
  const router = useRouter();
  const { title, image } = project;
  return (
    <Grid.Col value={size}>
      <CardWrapper
        onClick={(ev) => {
          ev.preventDefault();
          websitePageContext.setProject(project);
          router.push('/project');
        }}
      >
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
