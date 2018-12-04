import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './index.less';

const Cover = ({ data }) => (
  <div className={styles.cover}>
    <div className={styles.btnGroup}>
      {data &&
        data.map((item) => (
          <Button key={item.link || item.title}>
            {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
          </Button>
        ))}
    </div>
  </div>
);

class Card extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    link: PropTypes.string,
  };

  static defaultProps = {
    prop: 'value',
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { img, title, desc, link, children } = this.props;

    const inner = (
      <div className={styles.cardComponent}>
        <img src={img} alt="" />
        <div className={styles.cardBottom}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.desc}>{desc}</div>
        </div>
        {children}
      </div>
    );

    if (link) {
      return <Link to={link}>{inner}</Link>;
    }

    return inner;
  }
}

Card.displayName = 'Card';
Card.Cover = Cover;

export default Card;
