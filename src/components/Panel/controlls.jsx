import React from 'react';
import PropTypes from 'prop-types';
import { ControllsPanel } from './styles';

export default function Controlls(props) {
  const {
    children,
  } = props;

  return (
    <ControllsPanel>
      {children}
    </ControllsPanel>
  );
}

Controlls.propTypes = {
  children: PropTypes.node,
};

Controlls.defaultProps = {
  children: null,
};
