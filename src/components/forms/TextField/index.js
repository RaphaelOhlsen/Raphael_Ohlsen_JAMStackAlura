/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { Input, Label, TextFieldWrapper } from './styles';
import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';

const TextFieldWrapper = styled.div`
  position: relative;
`;

const Label = styled.label``;

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

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 20px 16px 15px;

  outline: 0;

  ${({ as }) => {
    if (as === 'textarea')
      return css`
        resize: none;
      `;
    return true;
  }}

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

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  label,
  name,
  onChange,
  type,
  value,
  error,
  isTouched,
  mask,
  placeholder,
  ...props
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <TextFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          {...props}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="primary.main"
          display="block"
          marginTop="5px"
          role="alert"
        >
          {error}
        </Text>
      )}
    </TextFieldWrapper>
  );
}

TextField.defaultProps = {
  mask: null,
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mask: PropTypes.string,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
