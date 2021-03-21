/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '../commons/Avatar';
import Box from '../foundation/layout/Box';
import Text from '../foundation/Text';

const AboutMeScreen = ({ gitHubData }) => (
  <Box
    display="flex"
    flex="1"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="100%"
    maxWidth="1000px"
    margin="0 auto"
  >
    <Text variant="title" marginBottom="24px" marginTop={{ md: '30px' }}>
      ABOUT &nbsp;ME
    </Text>
    <Avatar imgUrl="/images/avatar.jpg" />
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      marginTop={{ xs: '20px', md: '30px' }}
    >
      <Box tag="p" maxWidth={{ xs: '300px', sm: '400px', md: '250px' }}>
        Nulla velit ea eu anim magna ad sunt reprehenderit eiusmod anim.
        Deserunt ea ad excepteur irure esse pariatur ullamco ipsum minim ipsum
        commodo quis fugiat quis. Commodo adipisicing nisi culpa commodo ea sunt
        ullamco ad dolor sint excepteur. Magna deserunt anim aliqua pariatur
        nostrud fugiat reprehenderit dolor fugiat incididunt aliqua. Lorem anim
        eiusmod in adipisicing adipisicing laborum nulla.
      </Box>
      <Box display={{ xs: 'none', sm: 'block' }} width="60px" />
      <Box tag="p" maxWidth={{ xs: '300px', sm: '400px', md: '250px' }}>
        Nulla velit ea eu anim magna ad sunt reprehenderit eiusmod anim.
        Deserunt ea ad excepteur irure esse pariatur ullamco ipsum minim ipsum
        commodo quis fugiat quis. Commodo adipisicing nisi culpa commodo ea sunt
        ullamco ad dolor sint excepteur. Magna deserunt anim aliqua pariatur
        nostrud fugiat reprehenderit dolor fugiat incididunt aliqua. Lorem anim
        eiusmod in adipisicing adipisicing laborum nulla.
      </Box>
    </Box>
    <Text variant="title" marginTop="52px">
      MY &nbsp;REPOSITORIES
    </Text>
    <Box as="ul" marginTop="32px">
      {gitHubData.map((project) => (
        <Box
          key={project.node_id}
          tag="li"
          listStyle="none"
          marginBottom="32px"
          backgroundColor="#112a4c"
          padding="10px 20px"
          borderRadius="8px"
          maxWidth={{ xs: '400px', md: '700px' }}
        >
          <Box
            tag="a"
            href={project.html_url}
            textDecoration="none"
            target="_blank"
            rel="noreferrer"
          >
            <Text
              as="p"
              margin="0"
              variant="paragraph1"
              fontWeight="700"
              color="tertiary.main"
            >
              {project.name}
            </Text>
            <Text color="tertiary.dark" display={{ xs: 'none', sm: 'block' }}>
              {project.html_url}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default AboutMeScreen;
