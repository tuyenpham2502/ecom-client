import { Alert, IconButton, Snackbar } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

const showToast = (severity,message) => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const handleClose = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  ReactDOM.render(
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={true}
      autoHideDuration={3000}
      onClose={handleClose}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>,
    container
  );
};

export default showToast;
