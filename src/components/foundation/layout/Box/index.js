import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const BoxBase = styled.div`
  ${propToStyle('alignItems')};
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('border')};
  ${propToStyle('borderRadius')};
  ${propToStyle('boxShadow')}
  ${propToStyle('cursor')};
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('height')};
  ${propToStyle('justifyContent')}
  ${propToStyle('left')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')};
  ${propToStyle('marginRight')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('maxWidth')};
  ${propToStyle('min-Height')};
  ${propToStyle('padding')};
  ${propToStyle('position')};
  ${propToStyle('right')}
  ${propToStyle('textDecoration')}
  ${propToStyle('top')};
  ${propToStyle('width')}
`;

const Box = ({ tag, children, ...props }) => (
  <BoxBase as={tag} {...props}>
    {children}
  </BoxBase>
);

export default Box;
