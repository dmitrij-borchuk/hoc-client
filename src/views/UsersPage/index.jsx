import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
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
    listFetching: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    users: [],
  }

  state = {
    dialogOpened: false,
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
    } = this.props;
    const {
      dialogOpened,
    } = this.state;
    const items = users.map(user => user.username);

    // TODO
    const serverError = '';
    const isFetching = false;

    if (listFetching) {
      return <Loader />;
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
            <Field
              name="email"
              component={renderTextField}
              error={!!serverError}
              label="Email"
              fullWidth
              helperText={serverError}
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
  listFetching: pages.usersPage.fetching,
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
