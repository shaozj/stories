import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';
import MarkView from '../MarkView';
import readme from '~/component/ClosableList/index.zh-CN.md';

storiesOf('ClosableList', module)
  .add('ClosableList', () => {
    return (
      <MarkView readme={readme} name="ClosableList">
        <CodeExample title="基本用法" code={DemoRaw}>
          <Demo />
        </CodeExample>
      </MarkView>
    );
  });
