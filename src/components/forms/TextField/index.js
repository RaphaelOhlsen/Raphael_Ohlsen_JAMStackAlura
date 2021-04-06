/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, TextFieldWrapper } from './styles';
import Text from '../../foundation/Text';

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
