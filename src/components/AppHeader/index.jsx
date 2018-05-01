import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Title } from './styles';

function AppHeader(props) {
  const { logoutClick } = props;

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Title>
          <Typography variant="title" color="inherit">
            Hour of code
          </Typography>
        </Title>
        <Button
          color="inherit"
          onClick={logoutClick}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

AppHeader.propTypes = {
  logoutClick: PropTypes.func.isRequired,
};

AppHeader.defaultProps = {
};

export default AppHeader;
