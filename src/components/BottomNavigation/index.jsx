import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from 'material-ui/BottomNavigation';
import { Container } from './styles';

export default class BottomNavigationComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const {
      children,
      ...other
    } = this.props;

    return (
      <Container>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          {...other}
        >
          {children}
        </BottomNavigation>
      </Container>
    );
  }
}

BottomNavigationComponent.propTypes = {
  children: PropTypes.node,
};

BottomNavigationComponent.defaultProps = {
  children: null,
};
