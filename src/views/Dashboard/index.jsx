import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Page } from '../../commonStyles';

function Dashboard(props) {
  const {
    history,
  } = props;

  return (
    <Page>
      <List>
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
      </List>
    </Page>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Dashboard);
