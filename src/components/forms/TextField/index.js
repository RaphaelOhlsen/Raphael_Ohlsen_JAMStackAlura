/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { lowerCase } from './masks';
import { Input, Label, TextFieldWrapper, Message } from './styles';

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
  mask,
  setErrorInfo,
  errorInfo,
  ...props
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const [errorMessage, setErrorMessage] = useState('');
  const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkField = () => {
    if (value.length === 0) {
      return setErrorMessage('This field is required');
    }
    if (name === 'email' && !value.match(regexMail)) {
      return setErrorMessage('Fill this field with a valid email address');
    }
    setErrorInfo({
      ...errorInfo,
      [name]: false,
    });
    return setErrorMessage('');
  };

  const handleOnChange = useCallback((ev) => {
    if (ev.target.value.length > 0) setErrorMessage('');
    if (name === 'email' && !ev.target.value.match(regexMail)) {
      setErrorMessage('Fill this field with a valid email address');
    }
    if (mask === 'lowerCase') lowerCase(ev);
    onChange(ev);
  });

  return (
    <TextFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          // onChange={onChange}
          onChange={handleOnChange}
          onFocus={() => {
            checkField();
          }}
          onBlur={() => {
            checkField();
          }}
          {...props}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
      {errorMessage && <Message>{errorMessage}</Message>}
    </TextFieldWrapper>
  );
}

TextField.defaultProps = {
  mask: null,
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mask: PropTypes.string,
  setErrorInfo: PropTypes.func.isRequired,
};
