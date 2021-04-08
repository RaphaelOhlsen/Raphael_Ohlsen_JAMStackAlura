import React from 'react';
import user from '@testing-library/user-event';
import { FormContent } from '.';
import { render, act, screen, waitFor } from '../../../infra/test/testUtils';

const onSubmit = jest.fn((ev) => ev.preventDefault());

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () =>
        render(<FormContent onSubmit={onSubmit} setModalState={() => {}} />)
      );

      expect(screen.getByRole('button')).toBeDisabled();

      const inputName = screen.getByRole('textbox', {
        name: /name/i,
      });

      user.type(inputName, 'somename');
      await waitFor(() => expect(inputName).toHaveValue('somename'));

      const inputEmail = screen.getByRole('textbox', {
        name: /email/i,
      });

      user.type(inputEmail, 'somemail@gm.com');
      await waitFor(() => expect(inputEmail).toHaveValue('somemail@gm.com'));

      const inputMessage = screen.getByRole('textbox', {
        name: /message/i,
      });

      user.type(inputMessage, 'message here');
      await waitFor(() => expect(inputMessage).toHaveValue('message here'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(
        screen.getByRole('button', {
          name: /send/i,
        })
      );
      screen.debug();

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormContent onSubmit={onSubmit} setModalState={() => {}} />);
      const inputName = screen.getByRole('textbox', {
        name: /name/i,
      });
      inputName.focus();
      inputName.blur();

      await waitFor(() => screen.getByRole('alert'));
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Preencha com pelo menos 3 caracteres'
      );
    });
  });
});
