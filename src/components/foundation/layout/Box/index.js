import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')};
  ${propToStyle('position')};
  ${propToStyle('top')};
  ${propToStyle('margin')};
  ${propToStyle('height')};
  ${propToStyle('marginRight')};
  ${propToStyle('padding')};
  ${propToStyle('borderRadius')};
`;

export default Box;
