import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Divider from 'material-ui/Divider';
// import List, { ListItem, ListItemText } from 'material-ui/List';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import { getGroupWithMentor } from '../../actions/groups';
import { getTime } from '../../utils';

const getFieldName = (key) => {
  const map = {
    name: 'Group name',
    dateStart: 'Start time',
    dateEnd: 'End time',
    mentor: 'Mentor',
    details: 'Details',
  };

  return map[key];
};
const getMentorInfo = (mentor) => {
  let str = '';
  str += mentor.telephone ? mentor.telephone : '';
  str += mentor.email ? ` ${mentor.email}` : '';
  return str.length > 0 ? `(${str})` : str;
};
const getFieldValue = (data, key) => {
  const map = {
    mentor: d => `${d[key].username} ${getMentorInfo(d[key])}`,
    dateStart: d => getTime(new Date(d[key])),
    dateEnd: d => getTime(new Date(d[key])),
  };

  return map[key] ? map[key](data) : data[key];
};

class GroupView extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    group: PropTypes.shape({}),
  }
  static defaultProps = {
    group: null,
  }

  componentDidMount() {
    const {
      match,
    } = this.props;

    this.props.getData(match.params.id);
  }

  // componentDidUpdate() {
  //   const {
  //     user,
  //   } = this.props;

  //   const group = user.teaching.filter(item => item.id === parseInt(id, 10))[0];
  //   getUsersById
  //   group.mentorId
  //   user
  // }

  render() {
    const {
      group,
      match,
    } = this.props;
    const id = match.params.id;

    if (!group) {
      return null;
    }

    const keys = Object.keys(group).filter(item => item !== 'id' && item !== 'teacherId' && item !== 'schoolId' && item !== 'mentorId');

    return (
      <Table>
        <TableBody>
          {keys.map(key => (
            <TableRow key={key}>
              <TableCell>{getFieldName(key)}</TableCell>
              <TableCell numeric>{getFieldValue(group, key)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = ({ groups }) => ({
  group: groups.groupWithMentor,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getGroupWithMentor(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupView);
