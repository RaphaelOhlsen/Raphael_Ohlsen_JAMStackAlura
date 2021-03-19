import React, { useContext } from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import ProjectScreen from '../src/components/screens/ProjectScreen';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';

const ProjectPage = () => {
  const websitePageContext = useContext(WebsitePageContext);
  const title = websitePageContext.getSelectedProject();
  return <ProjectScreen />;
};

export default websitePageHOC(ProjectPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: ProjectPage.title,
    },
  },
});
