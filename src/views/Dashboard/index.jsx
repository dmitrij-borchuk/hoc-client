import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Page } from '../../commonStyles';

function Dashboard(props) {
  const {
    history,
    features,
  } = props;

  return (
    <Page>
      <List>
        {features.userManagement &&
          <ListItem>
            <Button
              variant="raised"
              color="primary"
              onClick={() => history.push('/users')}
              fullWidth
            >
              Users
            </Button>
          </ListItem>
        }
        <ListItem>
          <Button
            variant="raised"
            color="primary"
            onClick={() => history.push('/venues')}
            fullWidth
          >
            Schools
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="raised"
            color="primary"
            onClick={() => history.push('/groups')}
            fullWidth
          >
            Groups
          </Button>
        </ListItem>
      </List>
    </Page>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  features: PropTypes.shape({
    userManagement: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ features }) => ({
  features,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
  ),
)(Dashboard);
