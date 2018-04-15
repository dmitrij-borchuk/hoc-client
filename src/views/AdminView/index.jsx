import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import AllInclusive from 'material-ui-icons/AllInclusive';
import ImportContacts from 'material-ui-icons/ImportContacts';
import BottomNavigation from '../../components/BottomNavigation';
import { getSchools } from '../../actions/schools';


export class AdminView extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <BottomNavigation showLabels >
        <BottomNavigationAction label="My region" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="All" icon={<AllInclusive />} />
        <BottomNavigationAction label="Contacts" icon={<ImportContacts />} />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getSchools()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminView);
