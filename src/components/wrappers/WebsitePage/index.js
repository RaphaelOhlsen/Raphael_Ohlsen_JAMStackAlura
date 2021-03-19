/* eslint-disable import/no-cycle */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import data from '../../../data';
import Modal from '../../commons/Modal';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';
import FormCadastro from '../../patterns/FormCadastro';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
  getProjects: () => {},
  getSelectedProject: () => {},
  setProject: () => {},
});

export default function WebSitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  footerProps,
}) {
  const [isModalOpen, setModalState] = useState(false);
  const [projects, setProjects] = useState(data.projects);
  const [selectedProject, setSelectedProject] = useState({});
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
        getProjects: () => projects,
        getSelectedProject: () => selectedProject,
        setProject: (project) => {
          console.log('estou no setProject', project);
          setSelectedProject({ ...project });
          console.log('O que tem em selectedProject: ', selectedProject);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box display="flex" flex="1" flexDirection="column">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalState(false)}
          setModalState={setModalState}
          {...pageBoxProps}
        >
          {(propsDoModal) => (
            <FormCadastro
              setModalState={setModalState}
              propsDoModal={propsDoModal}
            />
          )}
        </Modal>
        {menuProps.display && <Menu setModalState={setModalState} />}

        {children}

        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebSitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  footerProps: {
    display: true,
  },
};

WebSitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
