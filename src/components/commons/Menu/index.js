import React from 'react';
import Image from 'next/image';
import Text from '../../foundation/Text';
import { MenuWrapper, LeftSide, RightSide } from './styles';

const Menu = () => {
  const links = [
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/faq' },
  ];
  return (
    <MenuWrapper>
      <LeftSide>
        <Image src="/images/darkBrand.svg" width={190} height={32} />
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
