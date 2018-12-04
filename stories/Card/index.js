import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';
import MarkView from '../MarkView';
import readme from '~/component/Card/index.zh-CN.md';

storiesOf('Card', module)
  .add('Card', () => {
    return (
      <MarkView readme={readme} name="Card">
        <CodeExample title="基本用法" code={DemoRaw}>
          <Demo />
        </CodeExample>
      </MarkView>
    );
  });
