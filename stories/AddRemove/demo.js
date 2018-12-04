import React from 'react';
import { Button, Table } from 'antd';

let uuid = 0;
export default class Demo extends React.Component {
  state = {
    list: [],
  };

  columns = [
    {
      title: '主指标标识',
      dataIndex: 'main',
    },
    {
      title: '关联指标',
      dataIndex: 'relative',
    },
    {
      title: '详情页',
      dataIndex: 'detail',
    },
    {
      title: '操作',
      render: (t, r) => <a onClick={() => this.remove(r.id)}>删除</a>,
    },
  ];

  // 删除
  remove = (id) => {
    const { list } = this.state;
    if (list.length === 0) {
      return;
    }

    this.setState({
      list: list.filter((item) => item.id !== id),
    });
  };

  // 新增
  add = () => {
    const { list } = this.state;
    const newList = list.concat([{
      id: uuid,
      main: `标识${uuid}`,
      relative: `相关标识${uuid}`,
      detail: `详情${uuid}`,
    }]);
    uuid++;
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;

    return (
      <div>
        <Button onClick={this.add} type="primary" style={{marginBottom: 20}}>添加</Button>
        <Table columns={this.columns} dataSource={list} rowKey="id" />
      </div>
    );
  }
}
