import React from 'react';
import TextField from 'material-ui/TextField';

export const renderTextField = ({
  input, // eslint-disable-line react/prop-types
  ...custom
}) => (
  <TextField
    {...custom}
    {...input}
  />
);

export const getTime = (date) => {
  const str = date.toLocaleTimeString();

  return str.slice(0, str.length - 3);
};
