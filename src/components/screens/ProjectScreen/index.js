import React, { useContext } from 'react';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function ProjectScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  const project = websitePageContext.getSelectedProject();
  console.log('dentro de ProjectScreen: ', project);
  return <p>{project.title}</p>;
}
