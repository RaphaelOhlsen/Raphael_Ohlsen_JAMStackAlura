/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Cover2 from '../../components/commons/Cover2';
import HeaderDesktop from '../../components/commons/HeaderDesktop';
import { Card } from '../../components/commons/Card';
import { HighLightCard } from '../../components/commons/HighLightCard';
import { Grid } from '../../components/foundation/layout/Grid';
import { WrapperProjects, ProjectsTitle } from './styles';

const imgUrl = require('../../../public/images/avatar.jpg').default;

const DesktopTemplate = () => (
  <>
    <Cover2 />
    <HeaderDesktop />
    <WrapperProjects>
      <ProjectsTitle>Some Things I've Built</ProjectsTitle>
      <Grid.Container>
        <Grid.Row marginBottom="50px">
          <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 1" />
          <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 2" />
          <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 3" />
        </Grid.Row>
        <Grid.Row>
          <HighLightCard
            size={{ xs: 12, md: 12 }}
            img={imgUrl}
            title="Destaque"
          />
        </Grid.Row>
      </Grid.Container>
    </WrapperProjects>
  </>
);

export default DesktopTemplate;
