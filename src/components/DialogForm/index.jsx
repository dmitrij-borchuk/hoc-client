import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
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
      transition={Transition}
    >
      <Header>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
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
