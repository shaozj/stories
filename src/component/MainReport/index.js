// 模型审核在线报告，主体部分
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimelineChart from '~/component/Charts/TimelineChart';
import AccurateTable from './AccurateTable';
import styles from './index.less';

class MainReport extends Component {
  static propTypes = {
    noHeader: PropTypes.bool,
    data: PropTypes.array,
    rangeTime: PropTypes.array,
    title: PropTypes.string,
  }

  static defaultProps = {
    noHeader: false,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { rangeTime, data, noHeader, title } = this.props;
    let total = 0;
    const trendData = data && data.map && data.map(item => ({
      x: +moment(item.date).format('x'),
      y1: +item.predict/100000000,
      y2: +item.real/100000000,
    }));
    const accurateData = data && data.map && data.map(item => {
      total += +item.accuracy;
      return {
        x: +moment(item.date).format('x'),
        y1: +item.accuracy,
      };
    });
    const len = data && data.length;
    const aveAccuracy = total / len;

    return (
      <Fragment>
        {
          noHeader ? '' :
          <Fragment>
            <h3>{title}</h3>
            <span className={styles.testTime}>回测时间：{rangeTime && `${rangeTime[0]} ~ ${rangeTime[1]}`}</span>
          </Fragment>
        }
        <div className={styles.chartsWrapper}>
          <div className={styles.chartBox}>
            <TimelineChart
              height={400}
              data={trendData}
              titleMap={{ y1: '预测值', y2: '实际值' }}
              title="真实值和预测值走势分布(单位：亿)"
              padding={[40, 20, 40, 50]}
            />
          </div>
          <div className={styles.chartBox}>
            <TimelineChart
              height={400}
              data={accurateData}
              titleMap={{ y1: '准确度' }}
              title="准确度分布"
            />
          </div>
        </div>
        <h3>准确度统计</h3>
        <span>平均准确度：{ aveAccuracy && (aveAccuracy * 100).toFixed(1) || 0 }%</span>
        <AccurateTable data={data} />
      </Fragment>
    );
  }
}

MainReport.displayName = 'MainReport';

export default MainReport;
