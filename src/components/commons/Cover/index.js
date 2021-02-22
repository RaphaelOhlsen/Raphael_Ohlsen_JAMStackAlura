import React from 'react';
import Image from 'next/image';
import Box from '../../foundation/layout/Box';

const Cover = () => (
  <Box display="flex" maxWidth="1200px" margin="0 auto">
    <Image
      src="/images/cover.png"
      width="1460"
      height="350"
      alt="Imagem de Capa"
    />
  </Box>
);

export default Cover;
