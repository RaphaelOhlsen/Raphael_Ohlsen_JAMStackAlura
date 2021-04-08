import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from '.';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Mario"
        onChange={() => {}}
        name="nome"
      />
    );

    // screen.debug();

    const textField = screen.getByDisplayValue(/mario/i);

    expect(textField).toMatchSnapshot();
  });
});

describe('when field is valid', () => {
  describe('and user is typing', () => {
    test('the value must br update', () => {
      const onChangeMock = jest.fn();
      render(
        <TextField
          placeholder="Nome"
          value=""
          onChange={onChangeMock}
          name="nome"
          isTouched
        />
      );

      const inputNome = screen.getByPlaceholderText(/nome/i);

      user.type(inputNome, 'raphael');

      expect(onChangeMock).toHaveBeenCalledTimes(7);
    });
  });
});

describe('when field is invalid', () => {
  test('displays the respective error message', () => {
    // elemento tenha span de texto
    // muda o CSS
    render(
      <TextField
        placeholder="Email"
        value="teste@gmail.com"
        onChange={() => {}}
        name="email"
        isTouched
        error="O campo email é obrigatório"
      />
    );

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const errorMessage = screen.getByRole('alert');

    expect(inputEmail).toHaveValue('teste@gmail.com');
    expect(errorMessage).toHaveTextContent('O campo email é obrigatório');
    expect(inputEmail).toMatchSnapshot();
  });
});
