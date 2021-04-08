import { contactForm } from './contactForm';

async function HttpClientModule() {
  return true;
}

const userDTO = {
  name: 'Raphael',
  email: 'raphael@gm.com',
  message: 'apenas um teste',
};

async function HttpClientModuleError() {
  return {
    err: {
      message: 'Cant send the contatcForm',
    },
  };
}

describe('contactForm', () => {
  describe('send()', () => {
    describe('send form userDTO successfully', () => {
      test('send DTO', async () => {
        const resposta = await contactForm.send(userDTO, HttpClientModule);
        expect(resposta).toBe(true);
      });
    });
    describe('send form userDTO and return error', () => {
      test('send DTO and throws an error', async () => {
        await expect(
          contactForm.send(userDTO, HttpClientModuleError)
        ).rejects.toThrow('Cant send the contatcForm');
      });
    });
  });
});
