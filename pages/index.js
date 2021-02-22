/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../src/components/foundation/layout/Box';
import Cover2 from '../src/components/commons/Cover2';
import HeaderDesktop from '../src/components/commons/HeaderDesktop';
import {
  ProjectsTitle,
  WrapperProjects,
} from '../src/components/commons/HeaderDesktop/styles';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Card } from '../src/components/commons/Card';
import { HighLightCard } from '../src/components/commons/HighLightCard';
import HeaderMobile from '../src/components/commons/HeaderMobile';
import Footer from '../src/components/commons/Footer';
import breakpointsMedia from '../src/theme/utils/breakpointsMedia';

const imgUrl = require('../public/images/project1.jpeg').default;
const imgUrl2 = require('../public/images/project2.jpeg').default;

const MainRow = styled.div`
  order: initial;
  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}
`;

const OrdinaryRow = styled.div`
  order: initial;
  ${breakpointsMedia({
    md: css`
      order: 1;
    `,
  })}
`;

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Cover2 />
      <HeaderMobile />
      <HeaderDesktop />
      <WrapperProjects>
        <ProjectsTitle>Some Things I' ve Built</ProjectsTitle>
        <Grid.Container>
          <MainRow>
            <Grid.Row>
              <HighLightCard
                size={{ xs: 12, md: 12 }}
                img={imgUrl2}
                title="Destaque"
              />
            </Grid.Row>
          </MainRow>
          <OrdinaryRow>
            <Grid.Row>
              <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 1" />
              <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 2" />
              <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 3" />
            </Grid.Row>
          </OrdinaryRow>
        </Grid.Container>
      </WrapperProjects>
      <Footer />
    </Box>
  );
}
