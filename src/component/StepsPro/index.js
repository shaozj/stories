import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Steps, Card } from 'antd';
import styles from './index.less';

const Step = Steps.Step;

class StepsPro extends Component {
  static propTypes = {
    current: PropTypes.number,
    steps: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      render: PropTypes.func
    })),
  }

  static defaultProps = {
  }

  render() {
    const { steps, current } = this.props;

    return (
      <div className={styles.stepsproComponent}>
        <Card>
          <Steps current={current}>
            {
              steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))
            }
          </Steps>
        </Card>
        {
          steps.map((item, index) => (
            <div className={current === index ? styles.show : styles.hide} key={index}>
              { item.render() }
            </div>
          ))
        }
      </div>
    );
  }
}

StepsPro.displayName = 'StepsPro';

export default StepsPro;
