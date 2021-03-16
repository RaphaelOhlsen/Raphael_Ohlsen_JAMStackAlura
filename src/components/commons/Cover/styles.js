import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  display: none;
  ${({ objectFit }) => css`
    position: relative;
    width: 1200px;
    height: 300px;
    margin: 0 auto;

    img {
      object-fit: ${objectFit};
    }
  `}
  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}
`;
