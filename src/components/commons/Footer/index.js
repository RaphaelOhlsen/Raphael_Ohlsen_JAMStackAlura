import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: #0e223f;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  svg {
    /* padding: 0 20px; */
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    padding: 0 20px;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/RaphaelOhlsen">
        <GitHubIcon fontSize="large" />
      </a>
      <a href="https://twitter.com/Raphael_Ohlsen">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="https://www.facebook.com/raphaelbernardo.ohlsen">
        <FacebookIcon fontSize="large" />
      </a>
    </FooterWrapper>
  );
}
