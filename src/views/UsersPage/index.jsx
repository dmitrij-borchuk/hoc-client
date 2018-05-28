import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Snackbar from 'material-ui/Snackbar';
import { reduxForm, Field, submit } from 'redux-form';
import * as usersActions from '../../actions/users';
import { usersPageGetData } from '../../actions/pages';
import List from '../../components/List';
import Dialog from '../../components/DialogForm';
import { Fab } from '../../commonStyles';
import { renderTextField } from '../../utils';
import { DialogFormBody } from '../../components/DialogForm/styles';
import Loader from '../../components/Loader';

const FORM_NAME = 'usersPage';

class UsersPage extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
    creationErrors: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })),
    listFetching: PropTypes.bool.isRequired,
    listFetchingError: PropTypes.shape({
      status: PropTypes.number,
    }),
    onSaveClick: PropTypes.func.isRequired,
    creationFetching: PropTypes.bool.isRequired,
    dialogOpened: PropTypes.bool.isRequired,
    setUserDialogState: PropTypes.func.isRequired,
  }
  static defaultProps = {
    users: [],
    listFetchingError: null,
    creationErrors: [],
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      users,
      listFetching,
      listFetchingError,
      creationErrors,
      creationFetching,
      dialogOpened,
      onSaveClick,
      setUserDialogState,
    } = this.props;
    const items = users.map(user => user.username);
    const errorMap = creationErrors.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.path]: cur,
      }),
      {},
    );

    if (listFetching) {
      return <Loader />;
    }

    if (listFetchingError) {
      // TODO: improve it by changing to the big icon with text in the middle of the screen
      return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open
          autoHideDuration={6000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Can`t load users</span>}
        />
      );
    }

    return (
      <Fragment>
        <List items={items} />
        <Fab>
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={() => setUserDialogState(true)}
          >
            <AddIcon />
          </Button>
        </Fab>

        <Dialog
          isOpened={dialogOpened}
          onClose={() => setUserDialogState(false)}
          onSave={() => onSaveClick()}
          title="New user"
        >
          <DialogFormBody>
            <Field
              name="email"
              component={renderTextField}
              error={!!errorMap.email}
              helperText={errorMap.email && errorMap.email.message}
              label="Email"
              fullWidth
              disabled={creationFetching}
            />
            <Field
              name="username"
              component={renderTextField}
              error={!!errorMap.username}
              helperText={errorMap.username && errorMap.username.message}
              label="Username"
              fullWidth
              disabled={creationFetching}
            />
          </DialogFormBody>
          {creationFetching && <Loader />}
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users, pages }) => ({
  users: users.list,
  listFetching: pages.usersPage.fetching,
  listFetchingError: pages.usersPage.error,
  creationErrors: users.creating.errors,
  creationFetching: users.creating.fetching,
  dialogOpened: users.dialogOpened,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(usersPageGetData()),
  onSaveClick: () => dispatch(submit(FORM_NAME)),
  onSubmit: data => dispatch(usersActions.createUser(data)),
  setUserDialogState: data => dispatch(usersActions.setUserDialogState(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: FORM_NAME,
})(UsersPage));
