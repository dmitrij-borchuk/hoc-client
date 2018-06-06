import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';
import { Header, Title } from './styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function DialogComponent(props) {
  const {
    isOpened,
    onClose,
    title,
    children,
    onSave,
  } = props;

  return (
    <Dialog
      fullScreen
      open={isOpened}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Header>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <Icon>close</Icon>
          </IconButton>
          <Title variant="title" color="inherit">
            {title}
          </Title>
          <Button color="inherit" onClick={onSave}>
            save
          </Button>
        </Toolbar>
      </Header>
      {children}
    </Dialog>
  );
}

DialogComponent.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

DialogComponent.defaultProps = {
  isOpened: false,
  onClose: () => {},
  onSave: () => {},
  title: '',
  children: '',
};
