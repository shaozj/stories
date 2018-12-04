'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class BottomButtons extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    prop: 'value'
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { className } = this.props;

    return (
      <div className={styles.bottombuttonsComponent + ( className ? ' ' + className : '')}>
        { this.props.children }
      </div>
    );
  }
}

BottomButtons.displayName = 'BottomButtons';

export default BottomButtons;
