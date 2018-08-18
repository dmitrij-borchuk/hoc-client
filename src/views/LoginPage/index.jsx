import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authActions from '../../actions/auth';
import AuthForm from '../../components/AuthForm/container';

export class LoginPage extends React.PureComponent {
  onSubmit = async (data) => {
    const {
      onSubmit,
      history,
    } = this.props;

    await onSubmit(data);
    history.push('/');
  }

  responseGoogle = async (response) => {
    const {
      oAuthLogin,
      history,
    } = this.props;

    const authResponse = response.getAuthResponse();
    await oAuthLogin(authResponse.id_token);
    history.push('/');
  }

  render() {
    return (
      <div>
        <AuthForm
          onSubmit={this.onSubmit}
          isFetching={this.props.isFetching}
          error={this.props.error}
          responseGoogle={this.responseGoogle}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  oAuthLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.shape({
    statusCode: PropTypes.number,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

LoginPage.defaultProps = {
  isFetching: false,
  error: null,
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
});

const mapDispatchToProps = {
  onSubmit: authActions.login,
  oAuthLogin: authActions.oAuthLogin,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
