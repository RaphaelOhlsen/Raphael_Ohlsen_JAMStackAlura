import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Page404Screen from '../src/components/screens/Page404Screen';

export default websitePageHOC(Page404Screen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Page 404',
    },
  },
});
