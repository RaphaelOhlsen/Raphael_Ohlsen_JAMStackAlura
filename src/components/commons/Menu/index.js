/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import Image from 'next/image';
import Text from '../../foundation/Text';
import { MenuWrapper, BrandSide, NavSide } from './styles';
import { WebsitePageContext } from '../../wrappers/WebsitePage/index';

const Menu = () => {
  const websitePageContext = useContext(WebsitePageContext);
  return (
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
                websitePageContext.toggleModalCadastro();
              }}
            >
              Contact
            </Text>
          </li>
        </ul>
      </NavSide>
    </MenuWrapper>
  );
};

export default Menu;
