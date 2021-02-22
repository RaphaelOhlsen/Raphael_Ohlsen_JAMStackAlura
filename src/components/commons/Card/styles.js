import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const CardImage = styled.div`
  max-width: 100%;
  height: 180px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;

  ${breakpointsMedia({
    md: css`
      height: 390px;
    `,
  })}
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  ${breakpointsMedia({
    md: css`
      height: 110px;
    `,
  })}

  h2 {
    ${breakpointsMedia({
      md: css`
        font-size: 24px;
      `,
    })}
  }
`;

export const CardWrapper = styled.div`
  max-width: 100%;
  height: 250px;
  border: 2px solid ${({ theme }) => theme.colors.tertiary.light.color};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.tertiary.main.color};
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ theme }) => theme.colors.primary.main.color};
  }

  ${breakpointsMedia({
    md: css`
      height: 500px;
      margin-bottom: 50px;
    `,
  })}
`;
