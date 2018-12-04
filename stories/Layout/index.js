import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo1 from './demo1';
import Demo1Raw from '!raw-loader!./demo1';
import Demo2 from './demo2';
import Demo2Raw from '!raw-loader!./demo2';
import MarkView from '../MarkView';
import readme from '~/component/Layout/PageHeaderLayout.zh-CN.md';

storiesOf('Layout', module)
  .add('PageHeaderLayout', () => {
    return (
      <MarkView readme={readme} name="PageHeaderLayout">
        <CodeExample title="基本用法" code={Demo1Raw}>
          <Demo1 />
        </CodeExample>
      </MarkView>
    );
  })
  .add('PageHeaderLayoutWithBack', () => {
    return (
      <MarkView readme={readme} name="PageHeaderLayoutWithBack">
        <CodeExample title="基本用法" code={Demo1Raw}>
          <Demo2 />
        </CodeExample>
      </MarkView>
    );
  });
