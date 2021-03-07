import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Text from '../../foundation/Text';
import Avatar from '../Avatar';
import { Wrapper, WrapperDescription, WrapperHeaderDesktop } from './styles';
import Cover from '../Cover';

const avatarUrl = '/images/avatar.jpg';

const HeaderDesktop = ({ setModalState }) => (
  <WrapperHeaderDesktop>
    <Cover />
    <Wrapper>
      <Avatar imgUrl={avatarUrl} />
      <Menu setModalState={setModalState} />
    </Wrapper>
    <WrapperDescription>
      <Text variant="paragraph1" as="p" maxWidth="620px" marginTop="8px">
        Telecommunications engineer returning to the code world. This is
        addictive. I want to learn a lot and support the great code community.
        Here we go!!!!
      </Text>
    </WrapperDescription>
  </WrapperHeaderDesktop>
);

HeaderDesktop.propTypes = {
  setModalState: PropTypes.func.isRequired,
};

export default HeaderDesktop;
