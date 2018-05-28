import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Snackbar from 'material-ui/Snackbar';
import { reduxForm, Field, submit } from 'redux-form';
import { createUser } from '../../actions/users';
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
    creationErrors: PropTypes.string,
    listFetching: PropTypes.bool.isRequired,
    listFetchingError: PropTypes.shape({
      status: PropTypes.number,
    }),
    onSaveClick: PropTypes.func.isRequired,
  }
  static defaultProps = {
    users: [],
    listFetchingError: null,
    creationErrors: null,
  }

  state = {
    dialogOpened: true,
  };

  componentDidMount() {
    this.props.getData();
  }

  onAddClick() {
    this.setState({
      dialogOpened: true,
    });
  }

  onDialogClose() {
    this.setState({
      dialogOpened: false,
    });
  }

  onDialogSave() {
    const {
      onSaveClick,
    } = this.props;

    onSaveClick();
  }

  render() {
    const {
      users,
      listFetching,
      listFetchingError,
      creationErrors,
    } = this.props;
    const {
      dialogOpened,
    } = this.state;
    const items = users.map(user => user.username);

    // TODO
    // const serverError = '';
    const isFetching = false;

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
            onClick={() => this.onAddClick()}
          >
            <AddIcon />
          </Button>
        </Fab>
        <Dialog
          isOpened={dialogOpened}
          onClose={() => this.onDialogClose()}
          onSave={() => this.onDialogSave()}
          title="New user"
        >
          <DialogFormBody>
            {creationErrors}
            <Field
              name="email"
              component={renderTextField}
              error={!!creationErrors}
              label="Email"
              fullWidth
              disabled={isFetching}
            />
            <Field
              name="username"
              component={renderTextField}
              error={!!creationErrors}
              label="Username"
              fullWidth
              disabled={isFetching}
            />
          </DialogFormBody>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users, pages }) => ({
  users: users.list,
  creationErrors: users.creationErrors,
  listFetching: pages.usersPage.fetching,
  listFetchingError: pages.usersPage.error,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(usersPageGetData()),
  onSaveClick: () => dispatch(submit(FORM_NAME)),
  onSubmit: data => dispatch(createUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: FORM_NAME,
})(UsersPage));
