import React from 'react';
// import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

function AppHeader(props) {
  // const { drawerIconClock } = props;

  // onLeftIconButtonClick={drawerIconClock}
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Hour of code
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

AppHeader.propTypes = {
  // drawerIconClock: PropTypes.func,
};

AppHeader.defaultProps = {
  // drawerIconClock: () => {},
};

export default AppHeader;
