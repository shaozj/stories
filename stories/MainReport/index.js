import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';
import Demo1 from './demo1';
import Demo1Raw from '!raw-loader!./demo1';
import Demo2 from './demo2';
import Demo2Raw from '!raw-loader!./demo2';
import MarkView from '../MarkView';
import readme from '~/component/MainReport/index.zh-CN.md';

storiesOf('MainReport', module)
  .add('MainReport', () => {
    return (
      <MarkView readme={readme} name="MainReport">
        <CodeExample title="没有 Header" code={DemoRaw}>
          <Demo />
        </CodeExample>
        <CodeExample title="有 Header" code={DemoRaw}>
          <Demo1 />
        </CodeExample>
      </MarkView>
    );
  })
  .add('real page', () => {
    return (
      <MarkView readme={readme} name="MainReport">
        <CodeExample title="完整页面" code={DemoRaw}>
          <Demo2 />
        </CodeExample>
      </MarkView>
    );
  });
