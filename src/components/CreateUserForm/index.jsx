import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';
import { renderTextField } from '../../utils';

export const FORM_NAME = 'userForm';

class UsersPage extends PureComponent {
  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.arrayOf(PropTypes.string).isRequired,
      message: PropTypes.string.isRequired,
    })),
    disabled: PropTypes.bool.isRequired,
    roles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }
  static defaultProps = {
    errors: [],
  }

  render() {
    const {
      errors,
      disabled,
      roles,
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

        {/* Email */}
        <Field
          name="email"
          component={renderTextField}
          error={!!errorMap.email}
          helperText={errorMap.email && errorMap.email.message}
          label="Email"
          fullWidth
          disabled={disabled}
        />

        {/* Username */}
        <Field
          name="username"
          component={renderTextField}
          error={!!errorMap.username}
          helperText={errorMap.username && errorMap.username.message}
          label="Username"
          fullWidth
          disabled={disabled}
        />

        {/* Role */}
        <Field
          name="roles"
          component={renderTextField}
          error={!!errorMap.roles}
          helperText={errorMap.roles && errorMap.roles.message}
          label="Select role"
          fullWidth
          disabled={disabled}

          id="select-currency"
          select
          margin="normal"
        >
          {roles.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Field>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: FORM_NAME,
})(UsersPage);
