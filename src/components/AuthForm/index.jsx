import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form';
import GoogleLogin from 'react-google-login';
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
  GoogleBtn,
  HorizontalSeparator,
  SeparatorText,
} from './styles';

// import messages from './messages';


function AuthForm(props) {
  const {
    isFetching,
    handleSubmit,
    serverError,
    responseGoogle,
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

              {/* Google login */}
              <GoogleLogin
                clientId="368978317118-17h4u0v4f4qe9bq4l6sp0ljujslfr525.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                style={{}}
                tag="div"
              >
                <GoogleBtn>
                  Login with Google
                </GoogleBtn>
              </GoogleLogin>

              <HorizontalSeparator>
                <SeparatorText>or</SeparatorText>
              </HorizontalSeparator>

              {/* Password login */}
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
  responseGoogle: PropTypes.func.isRequired,
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
