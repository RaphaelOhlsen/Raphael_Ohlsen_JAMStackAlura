import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,

  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
};

const setColor = css`
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

const setDefaultColor = css`
  color: ${({ theme }) => theme.colors.tertiary.dark.color};
`;

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${({ color }) => (color ? setColor : setDefaultColor)}
  ${propToStyle('textAlign')}
  ${propToStyle('marginRight')}
  ${propToStyle('textDecoration')}
  ${propToStyle('transition')}
  ${propToStyle('marginTop')}
  ${propToStyle('margin')}
  ${propToStyle('maxWidth')}
  ${propToStyle('marginTop')}
  ${propToStyle('textTransform')}
  ${propToStyle('letterSpacing')}
  ${propToStyle('cursor')}
`;

const Text = ({ tag, variant, children, color, ...props }) => (
  <TextBase as={tag} variant={variant} color={color} {...props}>
    {children}
  </TextBase>
);

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'a',
    'span',
  ]),
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};

export default Text;
