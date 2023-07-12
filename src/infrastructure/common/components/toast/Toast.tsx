import React from 'react';
import ReactDOM from 'react-dom';
import { Snackbar, IconButton } from '@material-ui';
import CloseIcon from '@material-ui/icons/Close';

const showToast = (message) => {
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
      message={message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />,
    container
  );
};

export default showToast;
