import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Icon } from 'antd';
import PageHeaderLayout from './PageHeaderLayout';
import styles from './withBack.less';

const history = createHistory();

// 回退上个页面
const goBack = () => {
  history.goBack();
};

export default ({ title, ...rest }) => {
  const titleWithBack = (
    <span>
      <Icon type="rollback" className={styles.rollback} onClick={goBack} />
      &nbsp;&nbsp;&nbsp; {title}
    </span>
  );

  return (
    <PageHeaderLayout title={titleWithBack} contentClassName={styles.content} {...rest} />
  );
};
