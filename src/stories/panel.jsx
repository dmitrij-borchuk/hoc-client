import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Panel from '../components/Panel';
import Header from '../components/Panel/header';
import Content from '../components/Panel/content';
import PanelControls from '../components/Panel/Controls';

storiesOf('Panel', module)
  .add('default', () => (
    <Panel>
      <Content>
        Content
      </Content>
    </Panel>
  ))
  .add('With header', () => (
    <Panel>
      <Header>
        Header content
      </Header>
      <Content>
        Content
      </Content>
    </Panel>
  ))
  .add('With header and controls', () => (
    <Panel>
      <Header>
        Header content
      </Header>
      <Content>
        <TextField
          name="email"
          label="Email"
          fullWidth
          disabled={false}
        />
      </Content>
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
    </Panel>
  ));
