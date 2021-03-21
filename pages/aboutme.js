/* eslint-disable react/button-has-type */
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutMeScreen from '../src/components/screens/AboutMeScreen';

export default websitePageHOC(AboutMeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
  },
});

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/raphaelOhlsen/repos');
  const gdata = await res.json();

  return {
    props: {
      gitHubData: gdata,
    },
  };
}