import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../../actions/auth';
import ResetPasswordForm from '../../components/ResetPasswordForm';

export class ResetPasswordPage extends React.PureComponent {
  onSubmit = async (data) => {
    const {
      onSubmit,
      history,
    } = this.props;

    await onSubmit(data);
    history.push('/');
  }

  render() {
    const {
      errors,
      isFetching,
    } = this.props;

    return (
      <ResetPasswordForm
        errors={errors}
        isFetching={isFetching}
        onSubmit={this.onSubmit}
      />
    );
  }
}

ResetPasswordPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

ResetPasswordPage.defaultProps = {
  isFetching: false,
  errors: [],
};

const mapStateToProps = ({ auth }) => ({
  error: auth.resetPassword.error,
  isFetching: auth.resetPassword.isFetching,
});

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmit(credentials) {
//       return dispatch(resetPassword(credentials));
//     },
//   };
// }
const mapDispatchToProps = {
  onSubmit: resetPassword,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ResetPasswordPage);
