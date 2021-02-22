import React from 'react';
import { WrapperHeaderMobile, WrapperDescription } from './styles';
import Menu from '../Menu';
import Avatar from '../Avatar';
import Text from '../../foundation/Text';

const imgUrl = require('../../../../public/images/darkBrand.svg').default;
const avatarUrl = require('../../../../public/images/avatar.jpg').default;

const HeaderMobile = () => (
  <WrapperHeaderMobile>
    <img src={imgUrl} alt="Imagem do Avatar" width="190" height="32" />
    <Menu />
    <Avatar imgUrl={avatarUrl} />
    <WrapperDescription>
      <Text variant="paragraph1" as="p" maxWidth="620px" marginTop="8px">
        Telecommunications engineer returning to the code world. This is
        addictive. I want to learn a lot and support the great code community.
        Here we go!!!!
      </Text>
    </WrapperDescription>
  </WrapperHeaderMobile>
);

export default HeaderMobile;
