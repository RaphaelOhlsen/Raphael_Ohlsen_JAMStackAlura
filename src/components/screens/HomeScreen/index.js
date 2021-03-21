import React from 'react';
import data from '../../../data';

import { Card } from '../../commons/Card';
import Header from '../../commons/Header';
import { ProjectsTitle } from '../../commons/Header/styles';
// import { HighLightCard } from '../../commons/HighLightCard';
import Box from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Link from '../../commons/Link';

export default function HomeScreen() {
  const { projects } = data;
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        maxWidth="1000px"
        width="100%"
      >
        <ProjectsTitle>Some Things I&apos; ve Built</ProjectsTitle>

        <Grid.Container>
          <Grid.Row>
            {projects.map((project) =>
              project.highlight ? (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  display="contents"
                >
                  <Card
                    key={project.id}
                    project={project}
                    size={{ xs: 12, md: 12 }}
                  />
                </Link>
              ) : (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  display="contents"
                >
                  <Card
                    key={project.id}
                    project={project}
                    size={{ xs: 12, md: 4 }}
                  />
                </Link>
              )
            )}
          </Grid.Row>
        </Grid.Container>
      </Box>
    </Box>
  );
}
