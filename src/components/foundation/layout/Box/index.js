import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')};
  ${propToStyle('position')};
  ${propToStyle('maxWidth')};
  ${propToStyle('top')};
  ${propToStyle('left')}
  ${propToStyle('right')}
  ${propToStyle('margin')};
  ${propToStyle('width')}
  ${propToStyle('height')};
  ${propToStyle('marginRight')};
  ${propToStyle('borderRadius')};
  ${propToStyle('cursor')};
`;

export default Box;
