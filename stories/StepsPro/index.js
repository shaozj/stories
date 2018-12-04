import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo1 from './demo1';
import Demo1Raw from '!raw-loader!./demo1';
import MarkView from '../MarkView';
import readme from '~/component/StepsPro/index.zh-CN.md';

storiesOf('StepsPro', module)
  .add('StepsPro', () => {
    return (
      <MarkView readme={readme} name="StepsPro">
        <CodeExample title="基础用法" code={Demo1Raw}>
          <Demo1 />
        </CodeExample>
      </MarkView>
    );
  });
