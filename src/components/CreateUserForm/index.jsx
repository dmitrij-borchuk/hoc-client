import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { renderTextField } from '../../utils';

export const FORM_NAME = 'userForm';

class UsersPage extends PureComponent {
  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })),
    disabled: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    errors: [],
  }

  render() {
    const {
      errors,
      disabled,
    } = this.props;
    const errorMap = errors.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.path]: cur,
      }),
      {},
    );

    return (
      <Fragment>
        <Field
          name="email"
          component={renderTextField}
          error={!!errorMap.email}
          helperText={errorMap.email && errorMap.email.message}
          label="Email"
          fullWidth
          disabled={disabled}
        />
        <Field
          name="username"
          component={renderTextField}
          error={!!errorMap.username}
          helperText={errorMap.username && errorMap.username.message}
          label="Username"
          fullWidth
          disabled={disabled}
        />
      </Fragment>
    );
  }
}

export default reduxForm({
  form: FORM_NAME,
})(UsersPage);
