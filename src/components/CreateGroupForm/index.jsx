import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';
import { renderTextField } from '../../utils';

export const FORM_NAME = 'groupForm';

const CreateGroupForm = (props) => {
  const {
    errors,
    disabled,
    venues,
  } = props;
  const errorMap = errors.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.path.join('.')]: cur,
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
        name="venueId"
        component={renderTextField}
        error={!!errorMap.venueId}
        helperText={errorMap.venueId && errorMap.venueId.message}
        label="Select school"
        fullWidth
        disabled={disabled}

        id="select-currency"
        select
        margin="normal"
      >
        {venues.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Field>
    </Fragment>
  );
};
CreateGroupForm.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
  venues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  disabled: PropTypes.bool.isRequired,
};
CreateGroupForm.defaultProps = {
  errors: [],
};

export default reduxForm({
  form: FORM_NAME,
})(CreateGroupForm);
