/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '../src/components/foundation/layout/Box';
import Header from '../src/components/commons/Header';
import { ProjectsTitle } from '../src/components/commons/Header/styles';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Card } from '../src/components/commons/Card';
import { HighLightCard } from '../src/components/commons/HighLightCard';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

const imgUrl = '/images/project1.jpeg';
const imgUrl2 = '/images/project2.jpeg';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalState(false)}
        setModalState={setModalState}
      >
        {(propsDoModal) => (
          <FormCadastro
            setModalState={setModalState}
            propsDoModal={propsDoModal}
          />
        )}
      </Modal>
      <Header setModalState={setModalState} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        maxWidth="1000px"
        width="100%"
      >
        <ProjectsTitle>Some Things I' ve Built</ProjectsTitle>

        <Grid.Container>
          <Grid.Row>
            <HighLightCard
              size={{ xs: 12, md: 12 }}
              img={imgUrl2}
              title="Destaque"
            />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 1" />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 2" />
            <Card size={{ xs: 12, md: 4 }} img={imgUrl} title="Projeto 3" />
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Footer />
    </Box>
  );
}