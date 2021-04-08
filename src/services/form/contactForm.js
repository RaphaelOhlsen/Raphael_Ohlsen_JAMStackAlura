/* eslint-disable no-console */
async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return true;
      }

      throw new Error('Não foi possível enviar formulário :(');
    })
    .catch((error) => {
      console.error(error);
    });
}

export const contactForm = {
  async send(userDTO, HttpClientModule = HttpClient) {
    return HttpClientModule(
      'https://contact-form-api-jamstack.herokuapp.com/message',
      {
        method: 'POST',
        body: userDTO,
      }
    ).then((res) => res);
  },
};
