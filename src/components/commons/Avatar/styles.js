import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  position: relative;
`;

Wrapper.Avatar = styled.div`
  ${({ objectFit }) => css`
    position: absolute;
    width: 150px;
    height: 150px;

    img {
      object-fit: ${objectFit};
      border-radius: 50%;
    }
  `};
`;
