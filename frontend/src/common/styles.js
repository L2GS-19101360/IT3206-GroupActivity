export const mdlBtnStyle = {
  padding: '6px',
  fontFamily: 'OCR A Std, monospace',
  letterSpacing: '1.5px',
  backgroundColor: 'rgb(119, 221, 119)',
  color: '#015901',
  fontSize: '22px',
  fontWeight: 'bolder',
  '&:hover': {
    backgroundColor: 'rgb(119, 221, 119, 0.8)',
  },
};

export const mdlContentStyle = {
  minWidth: 400,
  borderRadius: 'md',
  p: 3,
  boxShadow: 'lg',
};

export const inputStyle = {
  '& label': {
    fontSize: '20px',
    fontFamily: 'OCR A Std, monospace',
    color: '#555',
  },
  '& label.Mui-focused': {
    color: '#015901',
  },
  '& .MuiInputBase-input': {
    fontSize: '20px',
    fontFamily: 'OCR A Std, monospace',
    '&:focus': {
      borderColor: '#015901',
    },
  },
  '& .Mui-focused .MuiInputLabel-root': {
    color: '#015901',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#015901',
  },
};
