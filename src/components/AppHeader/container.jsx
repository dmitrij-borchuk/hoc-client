import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setItem } from '../../utils/storage';
// import { openDrawer } from '../../actions/common';

import AppHeader from './index';

class AppHeaderContainer extends PureComponent {
  onLogoClick = () => {
    const {
      history,
    } = this.props;

    history.push('/');
  }

  logoutClick() {
    const {
      history,
    } = this.props;

    setItem('token', null);
    history.push('/login');
  }

  render() {
    return (
      <AppHeader
        {...this.props}
        logoutClick={() => this.logoutClick()}
        onLogoClick={this.onLogoClick}
      />
    );
  }
}

AppHeaderContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(AppHeaderContainer);
