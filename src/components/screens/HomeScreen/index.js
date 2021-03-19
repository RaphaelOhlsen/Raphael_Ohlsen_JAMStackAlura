import React, { useContext } from 'react';
import { Card } from '../../commons/Card';
import Header from '../../commons/Header';
import { ProjectsTitle } from '../../commons/Header/styles';
import { HighLightCard } from '../../commons/HighLightCard';
import Box from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage/index';

export default function HomeScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  const projects = websitePageContext.getProjects();
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
                <Card
                  key={project.id}
                  project={project}
                  size={{ xs: 12, md: 12 }}
                />
              ) : (
                <Card
                  key={project.id}
                  project={project}
                  size={{ xs: 12, md: 4 }}
                />
              )
            )}
          </Grid.Row>
        </Grid.Container>
      </Box>
    </Box>
  );
}
