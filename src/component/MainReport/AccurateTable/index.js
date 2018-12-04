import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

class AccurateTable extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    prop: 'value'
  }

  constructor(props) {
    super(props);

    this.state = {};
    this.columns = [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '预测值',
        dataIndex: 'predict',
        key: 'predict',
      },
      {
        title: '真实值',
        dataIndex: 'real',
        key: 'real',
      },
      {
        title: '准确度',
        dataIndex: 'accuracy',
        key: 'accuracy'
      },
    ];
  }

  render() {
    const { data, loading } = this.props;

    return (
      <Table
        rowKey="date"
        columns={this.columns}
        dataSource={data}
        loading={loading}
        pagination={{
          pageSize: 10
        }}
        className={styles.accuratetableComponent}
      />
    );
  }
}

AccurateTable.displayName = 'AccurateTable';

export default AccurateTable;
