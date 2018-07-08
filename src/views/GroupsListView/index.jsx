import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { submit } from 'redux-form';
import ResponsiveTable from '../../components/ResponsiveTable';
import Loader from '../../components/Loader';
import { Fab, FabGroup } from '../../commonStyles';
import Dialog from '../../components/DialogForm';
import { DialogFormBody } from '../../components/DialogForm/styles';
import CreateGroupForm, { FORM_NAME } from '../../components/CreateGroupForm';
import * as groupsActions from '../../actions/groups';
import * as venuesActions from '../../actions/venues';

const getAssignee = data => (data.assigneeFull ? data.assigneeFull.name : 'No assignee');
class GroupsListView extends PureComponent {
  static propTypes = {
    getGroups: PropTypes.func.isRequired,
    getVenues: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
    venuesList: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
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
    list: [],
    creationErrors: [],
  }

  // TODO: add loader
  componentDidMount() {
    const {
      getGroups,
      getVenues,
    } = this.props;
    getGroups();
    getVenues();
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
      getGroups,
    } = this.props;

    await create(data);
    setDialogState(false);
    getGroups();
  }

  render() {
    const {
      list,
      listFetching,
      dialogOpened,
      submitCreateForm,
      setDialogState,
      creationFetching,
      creationErrors,
      venuesList,
    } = this.props;
    const headers = {
      name: 'School',
      venue: 'School',
      assignee: 'Assignee',
    };
    const data = list.map(item => ({
      id: item.id,
      name: item.name,
      venue: item.venue.name,
      assignee: getAssignee(item),
    }));
    const keys = [
      'name',
      'venue',
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

        <FabGroup>
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
        </FabGroup>

        <Dialog
          isOpened={dialogOpened}
          onClose={this.closeDialog}
          onSave={submitCreateForm}
          title="New group"
        >
          <DialogFormBody>
            <CreateGroupForm
              disabled={creationFetching}
              onSubmit={this.saveItem}
              errors={creationErrors}
              venues={venuesList}
            />
          </DialogFormBody>
          {creationFetching && <Loader />}
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ groups, venues }) => ({
  list: groups.list,
  listFetching: groups.listFetching,
  listFetchingError: groups.listFetchingError,
  dialogOpened: groups.dialogOpened,
  creationFetching: groups.editFetching,
  creationErrors: groups.editErrors,
  venuesList: venues.list,
});

const mapDispatchToProps = {
  getGroups: groupsActions.getGroups,
  getVenues: venuesActions.getVenues,
  setDialogState: groupsActions.setDialogState,
  clearCreatingErrors: groupsActions.clearCreatingErrors,
  create: groupsActions.create,
  submitCreateForm: () => submit(FORM_NAME),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsListView);
