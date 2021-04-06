import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from '.';
import WebsiteGlobalProvider from '../../wrappers/WebsitePage/provider';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <WebsiteGlobalProvider>
        <TextField
          label="Nome"
          value="Mario"
          onChange={() => {}}
          name="nome"
          type="text"
        />
      </WebsiteGlobalProvider>
    );

    screen.debug();

    const textField = screen.getByDisplayValue(/mario/i);

    expect(textField).toMatchSnapshot();
  });
});
