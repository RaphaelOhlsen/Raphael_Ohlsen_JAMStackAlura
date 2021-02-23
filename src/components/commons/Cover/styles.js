import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    width: 1200px;
    height: 300px;
    margin: 0 auto;

    img {
      object-fit: ${objectFit};
    }
  `}
`;
