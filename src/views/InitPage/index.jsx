import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import { initApp } from '../../actions/common';
import { renderTextField } from '../../utils';
import Panel from '../../components/Panel';
import PanelHeader from '../../components/Panel/header';
import PanelContent from '../../components/Panel/content';
import PanelControls from '../../components/Panel/Controls';
import {
  Container,
  Content,
} from './styles';

export class InitPage extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  onSubmit = async (data) => {
    const {
      handleSubmit,
      history,
    } = this.props;

    await handleSubmit(data);
    history.push('/');
  }

  render() {
    // TODO: add error handling

    return (
      <Container>
        <Panel>
          <PanelHeader>
            Initialization
          </PanelHeader>
          <PanelContent>
            <Content>
              <form onSubmit={this.onSubmit}>
                <Field
                  name="email"
                  component={renderTextField}
                  label="Email"
                  fullWidth
                />
                <Field
                  name="username"
                  component={renderTextField}
                  label="Username"
                  fullWidth
                />
                <PanelControls>
                  <Button
                    variant="raised"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </PanelControls>
              </form>
            </Content>
          </PanelContent>
        </Panel>
      </Container>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  onSubmit: initApp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withRouter(
    reduxForm({
      form: 'initForm',
    })(InitPage),
  ),
);
