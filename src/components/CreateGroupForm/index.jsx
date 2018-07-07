import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { renderTextField } from '../../utils';

export const FORM_NAME = 'groupForm';

const CreateGroupForm = (props) => {
  const {
    errors,
    disabled,
  } = props;
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
        name="name"
        component={renderTextField}
        error={!!errorMap.name}
        helperText={errorMap.name && errorMap.name.message}
        label="Name"
        fullWidth
        disabled={disabled}
      />
      <Field
        name="address"
        component={renderTextField}
        error={!!errorMap.address}
        helperText={errorMap.address && errorMap.address.message}
        label="Address"
        fullWidth
        disabled={disabled}
      />
    </Fragment>
  );
};
CreateGroupForm.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
  disabled: PropTypes.bool.isRequired,
};
CreateGroupForm.defaultProps = {
  errors: [],
};

export default reduxForm({
  form: FORM_NAME,
})(CreateGroupForm);
