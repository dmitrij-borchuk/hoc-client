import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { reduxForm, Field } from 'redux-form';

import { renderTextField } from '../../utils';
// import Loader from '../Loader';
import Panel from '../../components/Panel';
import Header from '../../components/Panel/header';
import Content from '../../components/Panel/content';
import PanelControls from '../../components/Panel/Controls';
// import { LinkBtn } from '../../commonStyles';
import {
  Container,
  ResetForm,
} from './styles';

// import messages from './messages';

function ResetPasswordForm(props) {
  const {
    isFetching,
    handleSubmit,
    errors,
  } = props;
  console.log('=-= errors', errors);
  const errorMap = errors.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.path.join('.')]: cur,
    }),
    {},
  );

  return (
    <Container>
      <ResetForm onSubmit={handleSubmit}>
        <Panel>
          <Header>
            Reset password
          </Header>
          <Content>
            <Field
              name="email"
              component={renderTextField}
              error={!!errorMap.email}
              label="Email"
              fullWidth
              helperText={errorMap.email}
              disabled={isFetching}
            />
          </Content>
          <PanelControls>
            <Button
              variant="raised"
              color="primary"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </PanelControls>
        </Panel>
      </ResetForm>
    </Container>
  );
}

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
};

ResetPasswordForm.defaultProps = {
  isFetching: false,
  errors: [],
};

export default reduxForm({
  form: 'resetPasswordForm',
})(ResetPasswordForm);
