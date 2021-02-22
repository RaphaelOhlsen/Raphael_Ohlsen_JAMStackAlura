import styled, { css } from 'styled-components';
import { Wrapper as WrapperAvatar } from '../../components/commons/Avatar/styles';
import { MenuWrapper } from '../../components/commons/Menu/styles';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  height: 120px;
  justify-content: space-between;

  ${WrapperAvatar} {
    flex-shrink: 2;
    margin-left: 70px;
    position: relative;
    top: -70px;
  }

  ${MenuWrapper} {
    margin-right: 50px;
    max-width: 450px;
    width: 100%;
    margin-top: 16px;
  }
`;

export const WrapperDescription = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding-left: 85px;
  padding-right: 50px;
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
      margin-bottom: 110px;
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
