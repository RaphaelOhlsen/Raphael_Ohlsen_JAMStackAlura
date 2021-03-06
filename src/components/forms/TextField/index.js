import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, TextFieldWrapper } from './styles';

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
  ...props
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  console.log(value);

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
    </TextFieldWrapper>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
