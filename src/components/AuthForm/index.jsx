import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { reduxForm, Field } from 'redux-form';

import { renderTextField } from '../../utils';
import Loader from '../Loader';
// import { LinkBtn } from '../../commonStyles';
import {
  Container,
  Header,
  Content,
  ContentContainer,
  SubmitBtn,
  // BottomLink,
} from './styles';

// import messages from './messages';


function AuthForm(props) {
  const {
    isFetching,
    handleSubmit,
    serverError,
  } = props;

  return (
    <Container>
      <Paper elevation={3} >
        <Paper elevation={1} >
          <Header>
            Login
          </Header>
        </Paper>
        <ContentContainer>
          <form onSubmit={handleSubmit}>
            <Content>
              <Field
                name="email"
                component={renderTextField}
                error={!!serverError}
                label="Email"
                fullWidth
                helperText={serverError}
                disabled={isFetching}
              />
              <Field
                name="password"
                component={renderTextField}
                type="password"
                label="Password"
                fullWidth
                disabled={isFetching}
              />
              <SubmitBtn>
                <Button
                  variant="raised"
                  color="primary"
                  fullWidth
                  type="submit"
                  disabled={isFetching}
                >
                  Submit
                </Button>
              </SubmitBtn>
              {/* <BottomLink>
                <LinkBtn href="/resetPassword">
                  Forgot password
                </LinkBtn>
              </BottomLink> */}
            </Content>
          </form>

          {isFetching &&
            <Loader />
          }
        </ContentContainer>
      </Paper>
    </Container>
  );
}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  serverError: PropTypes.string,
};

AuthForm.defaultProps = {
  isFetching: false,
  serverError: null,
};

export default reduxForm({
  form: 'authForm',
})(AuthForm);
