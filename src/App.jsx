import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getInitialData as getInitialDataAction } from './actions/loader';
import Dashboard from './views/Dashboard';
import GroupView from './views/GroupView';
import UsersPage from './views/UsersPage';
import Loader from './components/Loader';
// import AppDrawer from './components/AppDrawer/container';
import AppHeader from './components/AppHeader/container';

export const Container = styled.div`
  height: 100%;
`;

class App extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      id: PropTypes.number,
    }),
    isFetching: PropTypes.bool.isRequired,
    getInitialData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentUser: null,
  };

  // state = {
  //   menuIsOpened: false,
  // }

  componentWillMount() {
    const {
      getInitialData,
    } = this.props;

    getInitialData();
  }

  // toggleMenu(state: bool) {
  //   this.setState({ menuIsOpened: state });
  // }

  render() {
    const {
      isFetching,
      currentUser,
    } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <Container>
        <AppHeader />
        {/* <AppDrawer /> */}

        {/* Routing for logged in user */}
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/group/:id" component={GroupView} />
          <Route path="/users" component={UsersPage} />

          {/* Default route */}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth, loader }) => ({
  currentUser: auth.currentUser,
  isFetching: loader.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(getInitialDataAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
