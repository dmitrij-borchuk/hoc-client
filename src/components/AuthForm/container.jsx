import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from './index';

function getErrorText(error) {
  const errorMessages = {
    401: 'Login failed',
  };
  const currentError = errorMessages[error && error.statusCode];

  if (!error) {
    return null;
  }

  return currentError || 'Something went wrong';
}

class AuthFormContainer extends PureComponent {
  render() {
    const {
      isFetching,
      onSubmit,
      error,
      responseGoogle,
    } = this.props;

    return (
      <AuthForm
        serverError={getErrorText(error)}
        isFetching={isFetching}
        onSubmit={onSubmit}
        responseGoogle={responseGoogle}
      />
    );
  }
}

AuthFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  responseGoogle: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.shape({
    statusCode: PropTypes.number,
  }),
};

AuthFormContainer.defaultProps = {
  isFetching: false,
  error: null,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthFormContainer);
