import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import styles from './CodeExample.less';

const Panel = Collapse.Panel;

export default class CodeExample extends Component {
  static propTypes = {
    code: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
    autoExpand: PropTypes.bool,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      activeKey: undefined
    };
  }

  handleChange = () => {
    const { activeKey } = this.state;
    let newActiveKey = activeKey;
    if (activeKey) {
      newActiveKey = undefined;
    } else {
      newActiveKey = ['1'];
    }
    this.setState({
      activeKey: newActiveKey
    }, () => Prism.highlightAll());
  };

  render() {
    const { activeKey } = this.state;
    const { code } = this.props;
    const header = activeKey ? '收起源代码' : '显示源代码';

    return (
      <div className={styles.exampleWrapper}>
        <div className={styles.demoWrapper}>
          <h3 className={styles.title}>{this.props.title}</h3>
          {this.props.children}
        </div>
        <Collapse activeKey={activeKey} onChange={this.handleChange} >
          <Panel header={header} key="1">
            <pre><code className="language-jsx">{code}</code></pre>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
