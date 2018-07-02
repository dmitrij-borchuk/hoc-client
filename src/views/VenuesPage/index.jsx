import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { submit } from 'redux-form';
import ResponsiveTable from '../../components/ResponsiveTable';
import Loader from '../../components/Loader';
import { Fab } from '../../commonStyles';
import Dialog from '../../components/DialogForm';
import { DialogFormBody } from '../../components/DialogForm/styles';
import CreateVenueForm, { FORM_NAME } from '../../components/CreateVenueForm';
import * as venuesActions from '../../actions/venues';

class VenuesPage extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    groups: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
    listFetching: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    setDialogState: PropTypes.func.isRequired,
    dialogOpened: PropTypes.bool.isRequired,
    creationFetching: PropTypes.bool.isRequired,
    clearCreatingErrors: PropTypes.func.isRequired,
    submitCreateForm: PropTypes.func.isRequired,
    creationErrors: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })),
  }
  static defaultProps = {
    groups: [],
    creationErrors: [],
  }

  componentDidMount() {
    this.props.getData();
  }

  itemClick = (item) => {
    const {
      history,
    } = this.props;
    history.push(`/group/${item.id}`);
  }

  closeDialog = () => {
    const {
      setDialogState,
      clearCreatingErrors,
    } = this.props;
    setDialogState(false);
    clearCreatingErrors();
  }

  saveItem = async (data) => {
    const {
      create,
      setDialogState,
    } = this.props;

    await create(data);
    setDialogState(false);
  }

  render() {
    const {
      groups,
      listFetching,
      dialogOpened,
      submitCreateForm,
      setDialogState,
      creationFetching,
      creationErrors,
    } = this.props;
    console.log('=-= creationErrors', creationErrors);
    const data = groups.sort(
      (a, b) => a.venue.name > b.venue.name,
    ).map(group => ({
      name: `${group.venue.name}/${group.name}`,
      assignee: group.assigneeFull && group.assigneeFull.username,
      id: group.id,
    }));
    const headers = {
      name: 'School/Group',
      assignee: 'Assignee',
    };
    const keys = [
      'name',
      'assignee',
    ];

    if (listFetching) {
      return <Loader />;
    }

    return (
      <Fragment>
        <ResponsiveTable
          keys={keys}
          headers={headers}
          data={data}
          onClick={this.itemClick}
        />

        <Fab>
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={() => setDialogState(true)}
          >
            <Icon>add</Icon>
          </Button>
        </Fab>

        <Dialog
          isOpened={dialogOpened}
          onClose={this.closeDialog}
          onSave={submitCreateForm}
          title="New user"
        >
          <DialogFormBody>
            <CreateVenueForm
              disabled={creationFetching}
              onSubmit={this.saveItem}
              errors={creationErrors}
            />
          </DialogFormBody>
          {creationFetching && <Loader />}
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ groups, venues }) => ({
  groups: groups.list,
  listFetching: venues.data.fetching,
  listFetchingError: venues.data.error,
  dialogOpened: venues.dialogOpened,
  creationFetching: venues.edit.fetching,
  creationErrors: venues.edit.errors,
});

const mapDispatchToProps = {
  getData: venuesActions.getData,
  setDialogState: venuesActions.setDialogState,
  clearCreatingErrors: venuesActions.clearCreatingErrors,
  create: venuesActions.create,
  submitCreateForm: () => submit(FORM_NAME),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenuesPage);
