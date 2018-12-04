import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';
import MarkView from '../MarkView';
import readme from '~/component/PageHeader/index.zh-CN.md';

storiesOf('PageHeader', module)
  .add('PageHeader', () => {
    return (
      <MarkView readme={readme} name="PageHeader">
        <CodeExample title="基本用法" code={DemoRaw}>
          <Demo />
        </CodeExample>
      </MarkView>
    );
  });
