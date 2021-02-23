import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { Wrapper as WrapperAvatar } from '../Avatar/styles';
import {
  MenuWrapper,
  LeftSide as MenuWrapperLeftSide,
  RightSide as MenuWrapperRightSide,
} from '../Menu/styles';

export const WrapperHeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}

  img {
    margin-top: 15px;
  }

  ${MenuWrapper} {
    margin-top: 10px;
  }

  ${MenuWrapperLeftSide} {
    display: none;
  }

  ${MenuWrapperRightSide} {
    ul {
      padding: 10px 30px;
      border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
      border-radius: 8px;

      ${breakpointsMedia({
        sm: css`
          margin-bottom: 64px;
          padding: 10px 80px;
        `,
      })}
    }
  }

  ${WrapperAvatar} {
    margin-top: 20px;

    p {
      font-size: 14px;
    }
  }
`;

export const WrapperDescription = styled.div`
  max-width: 320px;
  ${breakpointsMedia({
    sm: css`
      max-width: 400px;
    `,
  })};

  p {
    font-size: 14px;
  }
`;

export const WrapperImage = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    width: 190px;
    height: 32px;
    margin: 15px auto 0 auto;

    img {
      object-fit: ${objectFit};
    }
  `}
`;
