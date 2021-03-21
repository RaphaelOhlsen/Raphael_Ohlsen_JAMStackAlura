/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const MenuWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      margin: 20px auto;
    `,
  })}

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      justify-content: space-between;
      padding: 14px 28px;
      background: #112a4c;
      margin: 0 auto;
      border-radius: 0 0 8px 8px;
    `,
  })}
`;

export const BrandSide = styled.div`
  ${breakpointsMedia({
    md: css`
      margin-left: 30px;
    `,
  })}
`;

export const NavSide = styled.nav`
  ul {
    display: flex;
    list-style: none;
    border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
    border-radius: 8px;
    padding: 10px 30px;

    ${breakpointsMedia({
      sm: css`
        /* margin-bottom: 64px; */
        padding: 10px 80px;
      `,
    })}

    ${breakpointsMedia({
      md: css`
        border: 0;
        margin: 0;
        padding: 10px 0;
        margin-right: 30px;
      `,
    })}

    li + li {
      margin-left: 70px;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.primary.main.color};
    }
  }
`;
