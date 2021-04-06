/* eslint-disable no-undef */
import { css } from 'styled-components';
import breakpoints from '../breakpoints';

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsName = Object.keys(cssByBreakpoints);

  return breakpointsName.map(
    (breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  );
}

export default breakpointsMedia;
