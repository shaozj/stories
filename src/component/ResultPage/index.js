'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Result from '~/component/Result';
import styles from './index.less';

class ResultPage extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'error']),
    title: PropTypes.string,
    description: PropTypes.node,
  }

  static defaultProps = {
    prop: 'value'
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card className="content-card">
        <Result
          {...this.props}
          className={styles.resultPage}
        />
      </Card>
    );
  }
}

ResultPage.displayName = 'ResultPage';

export default ResultPage;
