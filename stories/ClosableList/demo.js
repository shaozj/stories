import React, { Component } from 'react';
import ClosableList from '~/component/ClosableList';

export default class Demo extends Component {
  state = {
    featList: [
      '银行同业间7天回购定盘利率',
      '测试指标',
      'API成功调用耗时时序',
      '无损压测波动时序',
      '外汇日时序',
      '外汇5分钟时序',
      'a',
      'cj',
      'a1',
      'a2',
      '新建指标',
      'a a a a',
      'xinyao_test',
      'xinyao_test_222d',
      'xinyao_test_222f',
      'xinyao_test_222e',
    ],
    curFeat: '外汇日时序',
  };

  handleSelectFeat = (curFeat) => {
    this.setState({ curFeat });
  };

  removeFeat = (feat) => {
    const { featList } = this.state;
    const newFeatList = featList.filter((item) => item !== feat);
    this.setState({ featList: newFeatList });
  };

  render() {
    const { featList, curFeat } = this.state;

    return (
      <ClosableList
        data={featList}
        selected={curFeat}
        onSelect={this.handleSelectFeat}
        onClose={this.removeFeat}
      />
    );
  }
}
