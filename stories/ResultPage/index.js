import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo from './demo';
import DemoRaw from '!raw-loader!./demo';
import MarkView from '../MarkView';
import readme from '~/component/ResultPage/index.zh-CN.md';

storiesOf('ResultPage', module)
  .add('ResultPage', () => {
    return (
      <MarkView readme={readme} name="ResultPage">
        <CodeExample title="基本用法" code={DemoRaw}>
          <Demo />
        </CodeExample>
      </MarkView>
    );
  });
