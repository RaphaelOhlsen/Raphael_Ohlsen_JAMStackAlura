import styled, { css } from 'styled-components';
import { Wrapper as WrapperAvatar } from '../Avatar/styles';

import {
  MenuWrapper,
  BrandSide as MenuWrapperLeftSide,
  NavSide as MenuWrapperRightSide,
} from '../Menu/styles';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const WrapperHeaderDesktop = styled.div`
  /* display: none; */

  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}
`;

export const WrapperDescription = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding-left: 85px;
  padding-right: 50px;

  & > p {
    display: none;
    ${breakpointsMedia({
      md: css`
        display: block;
      `,
    })}
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  height: 120px;
  justify-content: space-around;

  ${WrapperAvatar} {
    display: none;
    ${breakpointsMedia({
      md: css`
        display: block;
        position: relative;
        top: -70px;
        left: 0;
      `,
    })}
  }

  ${MenuWrapper} {
    ${breakpointsMedia({
      md: css`
        height: 50px;
        background: inherit;
        padding-top: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      `,
    })}
  }
`;

export const WrapperProjects = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  align-items: center;
`;

export const ProjectsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.tertiary.main.color};
  font-size: 24px;
  margin-bottom: 32px;

  ${breakpointsMedia({
    sm: css`
      margin-bottom: 64px;
    `,
    md: css`
      margin-bottom: 80px;
      font-size: 32px;
    `,
  })}

  &::before,
  &::after {
    content: '';
    height: 3px;
    width: 30px;
    background: ${({ theme }) => theme.colors.primary.main.color};
    display: block;
    position: relative;

    ${breakpointsMedia({
      sm: css`
        height: 3px;
        width: 70px;
      `,
      md: css`
        height: 3px;
        width: 80px;
      `,
    })}
  }

  &::before {
    top: 15px;
    right: 32px;

    ${breakpointsMedia({
      sm: css`
        top: 15px;
        right: 75px;
      `,
      md: css`
        top: 20px;
        right: 90px;
      `,
    })}
  }

  &::after {
    top: -14px;
    left: 265px;

    ${breakpointsMedia({
      sm: css`
        top: -15px;
        right: 75px;
      `,
      md: css`
        top: -20px;
        left: 360px;
      `,
    })}
  }
`;
