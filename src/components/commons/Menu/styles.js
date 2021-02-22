/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const MenuWrapper = styled.header`
  display: flex;
  height: 32px;
  margin-bottom: 20px;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-top: 10px;

    li + li {
      margin-left: 70px;
      /* margin-right: 20px; */
    }
    a:hover {
      color: ${({ theme }) => theme.colors.primary.main.color};
    }
  }
`;
