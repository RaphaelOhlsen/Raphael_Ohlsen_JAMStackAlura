import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  display: none;
  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}
`;

Wrapper.Avatar = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    width: 150px;
    height: 150px;

    img {
      object-fit: ${objectFit};
      border-radius: 50%;
    }
  `};
`;
