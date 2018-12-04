// 可选择，可关闭的 list

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider } from 'antd';
import styles from './index.less';

class ClosableList extends Component {
  static propTypes = {
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.array,
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
    yTrue: PropTypes.object, // 真实值指标
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = item => {
    const { onSelect } = this.props;
    onSelect && onSelect(item);
  };

  handleClose = (e, item) => {
    e.stopPropagation();
    const { onClose } = this.props;
    onClose && onClose(item);
  };

  render() {
    const { data, selected, yTrue } = this.props;

    return (
      <ul className={styles.closablelistComponent}>
        {
          yTrue &&
          <li
            key={-1}
            onClick={() => this.handleClick(yTrue && yTrue.indexName)}
            className={selected === yTrue.indexName ? styles.selected : ''}
          >
            {yTrue.indexName}
          </li>
        }
        { yTrue && <Divider /> }
        {data &&
          data.map((item) => (
            <li
              key={item}
              onClick={() => this.handleClick(item)}
              className={selected === item ? styles.selected : ''}
            >
              {item}
              <Icon type="close" className={styles.closeIcon} onClick={(e) => this.handleClose(e, item)} />
            </li>
          ))}
      </ul>
    );
  }
}

ClosableList.displayName = 'ClosableList';

export default ClosableList;
