import React, { Component } from 'react';
import StepsPro from '~/component/StepsPro';
import ResultPage from '~/component/ResultPage';
import BottomButtons from '~/component/BottomButtons';
import { Button } from 'antd';

export default class Demo extends Component {
  state = {
    currentStep: 0,
  };

  next = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep + 1 });
  };

  prev = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 });
  };

  render() {
    const { currentStep } = this.state;
    const steps = [
      {
        title: '基本信息',
        render: () => <div>基本信息</div>,
      },
      {
        title: '上传源码',
        render: () => '上传源码',
      },
      {
        title: '完成',
        render: () => (
          <ResultPage
            type="success"
            title="提交审核成功"
            description={<span>提交成功后，你可以在我创建的模型中查看审核进度</span>}
          />
        ),
      },
    ];

    return (
      <div>
        <StepsPro current={currentStep} steps={steps} />
        <BottomButtons>
          {currentStep !== 0 && (
            <Button style={{ marginRight: 10 }} onClick={this.prev}>
              上一步
            </Button>
          )}
          {currentStep !== 2 && (
            <Button type="primary" onClick={this.next}>
              下一步
            </Button>
          )}
        </BottomButtons>
      </div>
    );
  }
}
