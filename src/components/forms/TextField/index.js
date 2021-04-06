/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { lowerCase } from './masks';
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
  ...props
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      {
        isFieldInvalid && 
        <Text
          variant="smallestException"
          color="primary.main"
          display="block"
          marginTop="5px"
          role="alert"
        >
          {error}
        </Text>}
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
