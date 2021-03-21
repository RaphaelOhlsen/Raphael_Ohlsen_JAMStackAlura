import data from '../../src/data';
import ProjectScreen from '../../src/components/screens/ProjectScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(ProjectScreen);

const { projects } = data;

export async function getStaticProps({ params }) {
  const projectData = projects.reduce((acc, project) =>
    project.slug === params.slug ? { ...project } : acc
  );

  return {
    props: {
      project: projectData,
      // image: projectData.image,
      // title: projectData.title,
      // description: projectData.description,
      // link: projectData.link,
      pageWrapperProps: {
        seoProps: {
          headTitle: projectData.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = projects.reduce((acc, project) => {
    const model = [{ params: { slug: project.slug } }];
    return [...acc, ...model];
  }, []);

  return {
    paths: slugs,
    fallback: false,
  };
}
