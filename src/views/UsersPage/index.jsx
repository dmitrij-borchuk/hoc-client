import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Snackbar from 'material-ui/Snackbar';
import { submit } from 'redux-form';
import * as usersActions from '../../actions/users';
import { usersPageGetData } from '../../actions/pages';
import List from '../../components/List';
import Dialog from '../../components/DialogForm';
import { Fab } from '../../commonStyles';
import { DialogFormBody } from '../../components/DialogForm/styles';
import Loader from '../../components/Loader';
import CreateUserForm, { FORM_NAME } from '../../components/CreateUserForm';

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
    saveUser: PropTypes.func.isRequired,
    submitCreateUserForm: PropTypes.func.isRequired,
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

  saveUser = async (data) => {
    const {
      saveUser,
      setUserDialogState,
    } = this.props;

    await saveUser(data);
    setUserDialogState(false);
  }

  render() {
    const {
      users,
      listFetching,
      listFetchingError,
      creationErrors,
      creationFetching,
      dialogOpened,
      setUserDialogState,
      submitCreateUserForm,
    } = this.props;
    const items = users.map(user => ({
      text: user.username,
      key: user.id.toString(),
    }));

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
        <List
          items={items}
        />
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
          onSave={submitCreateUserForm}
          title="New user"
        >
          <DialogFormBody>
            <CreateUserForm
              disabled={creationFetching}
              onSubmit={this.saveUser}
              errors={creationErrors}
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
  submitCreateUserForm: () => dispatch(submit(FORM_NAME)),
  saveUser: data => dispatch(usersActions.createUser(data)),
  setUserDialogState: data => dispatch(usersActions.setUserDialogState(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);
