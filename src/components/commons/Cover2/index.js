import React from 'react';
import { Wrapper } from './styles';

const imgUrl = require('../../../../public/images/cover.png').default;

const Cover = () => (
  <Wrapper>
    <img src={imgUrl} alt="" />
  </Wrapper>
);

export default Cover;
