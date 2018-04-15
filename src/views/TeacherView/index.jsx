import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { getUsersWithTeaching } from '../../actions/users';
import { getTime } from '../../utils';

const getListItem = (item) => {
  const startTime = new Date(item.dateStart);
  const endTime = new Date(item.dateEnd);
  const date = startTime.toLocaleDateString();
  const time = `${date} ${getTime(startTime)} - ${getTime(endTime)}`;

  return (
    <div>
      <ListItem button component="a" href={`/group/${item.id}`}>
        <ListItemText primary={item.name} />
        <ListItemText primary={time} />
      </ListItem>
      <Divider />
    </div>
  );
};

class TeacherView extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    user: PropTypes.shape({}),
  }
  static defaultProps = {
    user: null,
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      user,
    } = this.props;

    if (!user) {
      return null;
    }

    const items = user.teaching.map(getListItem);

    return (
      <div>
        <List component="nav">
          {items}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  user: users.userWithTeaching,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getUsersWithTeaching()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeacherView);
