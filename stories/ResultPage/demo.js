import React from 'react';
import ResultPage from '~/component/ResultPage';

export default () => (
  <ResultPage
    type="success"
    title="提交审核成功"
    description={
      <span>
        提交成功后，你可以在我创建的模型中查看审核进度
      </span>
    }
  />
);
