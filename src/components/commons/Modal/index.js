import React from 'react';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { motion } from 'framer-motion';
import { ModalWrapper } from './styles';
import Box from '../../foundation/layout/Box';

const Modal = ({ isOpen, onClose, children }) => {
  const CloseButton = () => (
    <Box
      position="absolute"
      top={{
        xs: '20px',
        md: '10px',
      }}
      right={{
        xs: '20px',
        md: '10px',
      }}
      onClick={() => onClose()}
      cursor="pointer"
    >
      <HighlightOffIcon fontSize="large" />
    </Box>
  );

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(ev) => {
        const isSafeArea = ev.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <ModalWrapper.LockScroll />}
      <motion.div
        variants={{
          open: {
            y: 65,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
          CloseButton,
        })}
      </motion.div>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
