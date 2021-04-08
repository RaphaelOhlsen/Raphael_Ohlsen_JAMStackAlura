/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import * as yup from 'yup';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { contactForm } from '../../../services/form/contactForm';

const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cadastroSchema = yup.object().shape({
  name: yup
    .string()
    .required('Este campo é obrigatório')
    .min(3, 'Preencha com pelo menos 3 caracteres'),
  email: yup
    .string()
    .matches(regexMail, 'Entre com um email válido')
    .required('Este campo é obrigatório'),
  message: yup.string().required('Este campo é obrigatório'),
});

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export const FormContent = ({ setModalState, onSubmit }) => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const initialValues = {
    email: '',
    name: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      setIsFormSubmited(true);
      setSubmissionStatus(formStates.LOADING);
      const userDTO = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      const res = await contactForm.send(userDTO);
      res
        ? setSubmissionStatus(formStates.DONE)
        : setSubmissionStatus(formStates.ERROR);
      resetValues();
    },
    async validateSchema(values) {
      return cadastroSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setModalState(false);
    setIsFormSubmited(false);
    setSubmissionStatus(formStates.DEFAULT);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit || form.handleSubmit}>
      <Box display="flex" justifyContent="center" margin="20px 0">
        <img src="/images/contact.png" height="100px" alt="Entre em contato" />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Name"
          type="text"
          name="name"
          value={form.values.name}
          onChange={form.handleChange}
          isTouched={form.touchedFields.name}
          error={form.errors.name}
          onBlur={form.handleBlur}
        />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Email"
          type="email"
          name="email"
          mask="lowerCase"
          value={form.values.email}
          onChange={form.handleChange}
          isTouched={form.touchedFields.email}
          error={form.errors.email}
          onBlur={form.handleBlur}
        />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Message"
          type="textarea"
          name="message"
          value={form.values.message}
          onChange={form.handleChange}
          isTouched={form.touchedFields.message}
          error={form.errors.message}
          onBlur={form.handleBlur}
          rows="5"
          cols="40"
        />
      </Box>

      <Button
        variant="primary.main"
        type="submit"
        fullWidth
        disabled={form.isFormDisabled}
      >
        SEND
      </Button>

      <Box display="flex" justifyContent="center">
        <Box width="80px">
          {isFormSubmited && submissionStatus === formStates.LOADING && (
            <Lottie
              config={{
                animationData: loadingAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
          {isFormSubmited && submissionStatus === formStates.DONE && (
            <>
              <Lottie
                config={{
                  animationData: successAnimation,
                  loop: false,
                  autoplay: true,
                }}
              />
              <p id="success" style={{ display: 'none' }} />
            </>
          )}
          {isFormSubmited && submissionStatus === formStates.ERROR && (
            <Lottie
              config={{
                animationData: errorAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          )}
        </Box>
      </Box>
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ propsDoModal, setModalState }) => (
  <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="center">
    <Grid.Col
      display="flex"
      justifyContent="center"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        height="600px"
        maxWidth={{
          sm: '430px',
          md: '480px',
        }}
        position="relative"
        flex={1}
        padding={{
          xs: '16px',
          md: '10px 35px 0',
        }}
        backgroundColor="#111d2d"
        borderRadius="8px"
        {...propsDoModal}
      >
        <propsDoModal.CloseButton />
        <FormContent setModalState={setModalState} />
      </Box>
    </Grid.Col>
  </Grid.Row>
);

FormContent.propTypes = {
  setModalState: PropTypes.func.isRequired,
};
export default FormCadastro;
