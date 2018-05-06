import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Container } from './styles';

export default function Panel(props) {
  const {
    children,
  } = props;

  return (
    <Container>
      <Paper elevation={3} >
        {children}
      </Paper>
    </Container>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
};

Panel.defaultProps = {
  children: null,
};
