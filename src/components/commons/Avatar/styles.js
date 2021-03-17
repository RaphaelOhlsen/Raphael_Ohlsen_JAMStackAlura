import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

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
