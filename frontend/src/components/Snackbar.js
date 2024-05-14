import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const NotifSnackbar = ({ snackbarInfo, handleCloseSnackbar }) => {
  return (
    <Snackbar
      open={snackbarInfo.open}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
    >
      <MuiAlert
        onClose={handleCloseSnackbar}
        severity={snackbarInfo.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackbarInfo.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default NotifSnackbar;