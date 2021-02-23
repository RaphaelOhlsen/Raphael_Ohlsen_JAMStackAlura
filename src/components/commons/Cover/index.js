import React from 'react';
import Image from 'next/image';
import { Wrapper } from './styles';

const Cover = () => (
  <Wrapper objectFit="contain">
    <Image src="/images/cover.png" alt="Imagem de Capa" layout="fill" />
  </Wrapper>
);

export default Cover;
