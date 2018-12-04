import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from '../CodeExample';
import Demo1 from './demo1';
import Demo1Raw from '!raw-loader!./demo1';
import MarkView from '../MarkView';
import readme from '~/component/AvatarList/index.zh-CN.md';

storiesOf('AvatarList', module)
  .add('avatar list', () => {
    return (
      <MarkView readme={readme} name="AvatarList">
        <CodeExample title="基本用法" code={Demo1Raw}>
          <Demo1 />
        </CodeExample>
      </MarkView>
    );
  });
