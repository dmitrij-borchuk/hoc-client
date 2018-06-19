import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Divider from '@material-ui/core/Divider';
// import List, { ListItem, ListItemText } from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as groupsActions from '../../actions/groups';
import { LinkBtn } from './styles';

class GroupView extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    group: PropTypes.shape({}),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  }
  static defaultProps = {
    group: null,
  }

  componentDidMount() {
    const {
      match,
      getData,
    } = this.props;

    getData(match.params.id);
  }

  getAssigneeValue() {
    const {
      group,
    } = this.props;

    if (group.assigneeFull) {
      return group.assigneeFull.username;
    }

    return (
      <Fragment>
        <div>
          unassigned
        </div>
        <div>
          (<LinkBtn onClick={this.assignHandler}>Assign me</LinkBtn>)
        </div>
      </Fragment>
    );
  }

  assignHandler = async () => {
    const {
      match,
      getData,
    } = this.props;

    const {
      editGroup,
      group,
      userId,
    } = this.props;

    await editGroup({
      ...group,
      assignee: userId,
    });

    getData(match.params.id);
  }

  render() {
    const {
      group,
    } = this.props;

    if (!group) {
      return null;
    }

    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>{group.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Assignee</TableCell>
            <TableCell numeric>{this.getAssigneeValue()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = ({ groups, auth }) => ({
  group: groups.groupWithMentor,
  userId: auth.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(groupsActions.getGroup(id)),
  editGroup: data => dispatch(groupsActions.editGroup(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupView);
