import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Title } from './styles';

function AppHeader(props) {
  const {
    logoutClick,
    onLogoClick,
  } = props;

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Title onClick={onLogoClick}>
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
  onLogoClick: PropTypes.func,
};

AppHeader.defaultProps = {
  onLogoClick: () => {},
};

export default AppHeader;
