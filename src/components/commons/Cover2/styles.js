import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  display: none;

  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}

  img {
    width: 100%;
  }
`;
