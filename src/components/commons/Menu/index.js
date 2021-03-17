import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Text from '../../foundation/Text';
import { MenuWrapper, BrandSide, NavSide } from './styles';

const Menu = ({ setModalState }) => (
  <MenuWrapper>
    <BrandSide>
      <Image src="/images/darkBrand.svg" width={190} height={32} />
    </BrandSide>
    <NavSide>
      <ul>
        <li key="link__01">
          <Text
            variant="paragraph1"
            tag="span"
            color="primary.main"
            marginRight="5px"
          >
            01.
          </Text>
          <Text
            variant="paragraph1"
            href="/teste"
            color="tertiary.dark"
            textDecoration="none"
            transition="color 300ms"
          >
            About
          </Text>
        </li>
        <li key="link__02">
          <Text
            variant="paragraph1"
            tag="span"
            color="primary.main"
            marginRight="5px"
          >
            02.
          </Text>
          <Text
            variant="paragraph1"
            href="/teste"
            color="tertiary.dark"
            textDecoration="none"
            transition="color 300ms"
            onClick={(ev) => {
              ev.preventDefault();
              setModalState(true);
            }}
          >
            Contact
          </Text>
        </li>
      </ul>
    </NavSide>
  </MenuWrapper>
);

Menu.propTypes = {
  setModalState: PropTypes.func.isRequired,
};

export default Menu;
