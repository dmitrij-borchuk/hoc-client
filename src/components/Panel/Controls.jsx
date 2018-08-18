import React from 'react';
import PropTypes from 'prop-types';
import { ControlsPanel } from './styles';

export default function Controls(props) {
  const {
    children,
  } = props;

  return (
    <ControlsPanel>
      {children}
    </ControlsPanel>
  );
}

Controls.propTypes = {
  children: PropTypes.node,
};

Controls.defaultProps = {
  children: null,
};
