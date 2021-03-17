/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = ({ setModalState }) => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    email: true,
    name: true,
    message: true,
  });

  const isFormInvalid =
    errorInfo.email ||
    userInfo.name.length === 0 ||
    userInfo.message.length === 0;

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setModalState(false);
    setIsFormSubmited(false);
    setSubmissionStatus(formStates.DEFAULT);
    setUserInfo({ email: '', name: '', message: '' });
  }

  function handleChange(ev) {
    const fieldName = ev.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: ev.target.value,
    });
  }
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);
        const userDTO = {
          name: userInfo.name,
          email: userInfo.email,
          message: userInfo.message,
        };
        fetch('https://contact-form-api-jamstack.herokuapp.com/message ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              console.log(respostaDoServidor);
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            resetValues();
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            resetValues();
            console.error(error);
          });
      }}
    >
      <Box display="flex" justifyContent="center" margin="20px 0">
        <img src="/images/contact.png" height="100px" alt="Entre em contato" />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Name"
          type="text"
          name="name"
          value={userInfo.name}
          errorInfo={errorInfo}
          setErrorInfo={setErrorInfo}
          onChange={handleChange}
        />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Email"
          type="email"
          name="email"
          mask="lowerCase"
          value={userInfo.email}
          setErrorInfo={setErrorInfo}
          errorInfo={errorInfo}
          onChange={handleChange}
        />
      </Box>
      <Box margin="0 0 20px 0">
        <TextField
          label="Message"
          type="textarea"
          name="message"
          value={userInfo.message}
          onChange={handleChange}
          setErrorInfo={setErrorInfo}
          errorInfo={errorInfo}
          rows="5"
          cols="40"
        />
      </Box>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
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
            <Lottie
              config={{
                animationData: successAnimation,
                loop: false,
                autoplay: true,
              }}
            />
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
