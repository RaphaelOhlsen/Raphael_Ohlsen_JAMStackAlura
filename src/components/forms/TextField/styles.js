import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';

export const TextFieldWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label``;

Label.Text = styled.span`
  color: #101d2d;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 20px 16px 15px;

  outline: 0;

  resize: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border-color 0.3s;

  &:focus {
    border: 3px solid #2aafdb;
  }

  &:focus + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length;
    return (
      hasValue &&
      css`
        & + span {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;
