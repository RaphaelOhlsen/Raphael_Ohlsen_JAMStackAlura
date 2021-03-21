import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const CardImage = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    max-width: 100%;
    height: 200px;
    width: 320px;

    ${breakpointsMedia({
      sm: css`
        height: 260px;
        width: 370px;
      `,
    })}

    ${breakpointsMedia({
      md: css`
        height: 390px;
        width: 550px;
      `,
    })}

    img {
      object-fit: ${objectFit};
    }
  `}
`;
export const TextLink = styled(Text)`
  a:hover {
    color: ${({ theme }) => theme.colors.primary.main.color};
  }
`;
