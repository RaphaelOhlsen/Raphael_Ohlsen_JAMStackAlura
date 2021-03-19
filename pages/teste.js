/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import Button from '../src/components/commons/Button';
import Box from '../src/components/foundation/layout/Box';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const Screen = () => {
  const websitePageContext = useContext(WebsitePageContext);
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <div>
        <Button
          onClick={() => {
            websitePageContext.toggleModalCadastro();
          }}
        >
          Casdastrar
        </Button>
      </div>
    </Box>
  );
};

export default websitePageHOC(Screen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Page 404',
    },
  },
});
