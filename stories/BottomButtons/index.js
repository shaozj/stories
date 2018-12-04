import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo1 from './demo1';
import Demo1Raw from '!raw-loader!./demo1';
import MarkView from '../MarkView';
import readme from '~/component/BottomButtons/index.zh-CN.md';

storiesOf('BottomButtons', module)
  .add('bottom buttons', () => {
    return (
      <MarkView readme={readme} name="BottomButtons">
        <CodeExample title="基本用法" code={Demo1Raw}>
          <Demo1 />
        </CodeExample>
      </MarkView>
    );
  });
