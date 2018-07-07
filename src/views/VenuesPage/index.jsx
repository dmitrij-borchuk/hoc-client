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
import CreateVenueForm, { FORM_NAME } from '../../components/CreateVenueForm';
import * as venuesActions from '../../actions/venues';

class VenuesPage extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
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
    list: [],
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
      getData,
    } = this.props;

    await create(data);
    setDialogState(false);
    getData();
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
    } = this.props;
    const headers = {
      name: 'School',
      address: 'Address',
    };
    const keys = [
      'name',
      'address',
    ];

    if (listFetching) {
      return <Loader />;
    }

    return (
      <Fragment>
        <ResponsiveTable
          keys={keys}
          headers={headers}
          data={list}
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
          title="New venue"
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

const mapStateToProps = ({ venues }) => ({
  list: venues.list,
  listFetching: venues.listFetching,
  listFetchingError: venues.listFetchingError,
  dialogOpened: venues.dialogOpened,
  creationFetching: venues.edit.fetching,
  creationErrors: venues.edit.errors,
});

const mapDispatchToProps = {
  getData: venuesActions.getVenues,
  setDialogState: venuesActions.setDialogState,
  clearCreatingErrors: venuesActions.clearCreatingErrors,
  create: venuesActions.create,
  submitCreateForm: () => submit(FORM_NAME),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenuesPage);
