import React from 'react';
// import Image from 'next/image';
import Text from '../../foundation/Text';
import { MenuWrapper, LeftSide, RightSide } from './styles';

const imgUrl = require('../../../../public/images/darkBrand.svg').default;

const Menu = () => {
  const links = [
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/faq' },
  ];
  return (
    <MenuWrapper>
      <LeftSide>
        <img src={imgUrl} alt="Mocad Brand" />
      </LeftSide>
      <RightSide>
        <ul>
          {links.map((link, index) => (
            <li key={`link__${index}`}>
              <Text
                variant="paragraph1"
                tag="span"
                color="primary.main"
                marginRight="5px"
              >
                {`0${index + 1}.`}
              </Text>
              <Text
                variant="paragraph1"
                tag="a"
                href={link.url}
                textDecoration="none"
                transition="color 300ms"
              >
                {link.text}
              </Text>
            </li>
          ))}
        </ul>
      </RightSide>
    </MenuWrapper>
  );
};

export default Menu;
