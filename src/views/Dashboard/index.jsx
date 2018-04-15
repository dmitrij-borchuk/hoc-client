import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';
import { Page } from '../../commonStyles';

function Dashboard(props) {
  const {
    history,
  } = props;

  return (
    <Page>
      <Button
        variant="raised"
        color="primary"
        onClick={() => history.push('/users')}
        fullWidth
      >
        Users
      </Button>
    </Page>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Dashboard);
