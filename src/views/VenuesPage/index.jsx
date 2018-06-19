import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { groupsPageGetData } from '../../actions/pages';
import ResponsiveTable from '../../components/ResponsiveTable';
import Loader from '../../components/Loader';

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
  }
  static defaultProps = {
    groups: [],
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

  render() {
    const {
      groups,
      listFetching,
    } = this.props;
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
      </Fragment>
    );
  }
}

const mapStateToProps = ({ groups, pages }) => ({
  groups: groups.list,
  listFetching: pages.groupsPage.fetching,
  listFetchingError: pages.groupsPage.error,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(groupsPageGetData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenuesPage);
