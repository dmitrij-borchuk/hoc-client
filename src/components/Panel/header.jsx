import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Header } from './styles';

export default function PanelHeader(props) {
  const {
    children,
  } = props;

  return (
    <Paper elevation={1} >
      <Header>
        {children}
      </Header>
    </Paper>
  );
}

PanelHeader.propTypes = {
  children: PropTypes.node,
};

PanelHeader.defaultProps = {
  children: null,
};
