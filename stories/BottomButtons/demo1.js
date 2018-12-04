import React from 'react';
import { Button } from 'antd';
import BottomButtons from '~/component/BottomButtons';

export default () => (
  <BottomButtons>
    <Button style={{marginRight: 10}}>上一步</Button>
    <Button type="primary">下一步</Button>
  </BottomButtons>
);
