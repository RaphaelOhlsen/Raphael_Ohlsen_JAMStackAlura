import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  WrapperHeaderMobile,
  WrapperDescription,
  WrapperImage,
} from './styles';
import Menu from '../Menu';
import Avatar from '../Avatar';
import Text from '../../foundation/Text';

const brandUrl = '/images/darkBrand.svg';

const avatarUrl = '/images/avatar.jpg';

const HeaderMobile = ({ setModalState }) => (
  <WrapperHeaderMobile>
    <WrapperImage>
      <Image src={brandUrl} alt="Imagem do Avatar" width={190} height={32} />
    </WrapperImage>

    <Menu setModalState={setModalState} />
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

HeaderMobile.propTypes = {
  setModalState: PropTypes.func.isRequired,
};

export default HeaderMobile;
