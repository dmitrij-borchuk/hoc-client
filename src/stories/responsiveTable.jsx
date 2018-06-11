import React from 'react';
import { storiesOf } from '@storybook/react';
import ResponsiveTable from '../components/ResponsiveTable';

const data = [
  { first: '1Col1Row', second: '2Col1Row' },
  { first: '1Col2Row', second: '2Col2Row' },
];

storiesOf('ResponsiveTable', module)
  .add('default', () => (
    <ResponsiveTable
      keys={['first', 'second']}
      headers={{ first: 'FirstHeader', second: 'SecondHeader' }}
      data={data}
    />
  ));
