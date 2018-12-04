import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unified from 'unified';
import remarkParser from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import toHast from 'mdast-util-to-hast';
import hastToHtml from 'hast-util-to-html';
import yaml from 'js-yaml';
import { Anchor } from 'antd';
import 'github-markdown-css/github-markdown.css';
import styles from './MarkView.less';

const { Link } = Anchor;

/**
 * MarkView 组件
 * 输入：readme, children(demos)
 * 处理：将 readme 分割为上下两部分，上部分为组件介绍和使用方式
 *      中间部分插入代码演示，即各个 demo, 直接用 js 写，每个例子可以添加说明文档(用注释语法)
 *      下面部分为 API 文档
 * 输出：完整代码展示页面
 */
export default class MarkView extends Component {
  static propTypes = {
    readme: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    const { readme } = this.props;
    const markdownParser = unified()
      .use(remarkParser)
      .use(frontmatter, ['yaml'])
      .freeze();
    const ast = markdownParser.parse(readme);

    let yamlObj = {};
    let topAst;
    let bottomAst;
    const len = ast.children && ast.children.length;
    for (let i = 0; i < len; i++) {
      const node = ast.children[i];
      if (node.type === 'yaml') {
        yamlObj = yaml.safeLoad(ast.children[0].value);
      }
      if (this.isAPIHeader(node)) {
        topAst = {
          children: ast.children.slice(0, i),
          type: 'root',
        };
        bottomAst = {
          children: ast.children.slice(i, len),
          type: 'root',
        };
      }
    }

    const topHtml = topAst ? this.ast2Html(topAst) : '';
    const bottomHtml = bottomAst ? this.ast2Html(bottomAst) : '';

    this.state = {
      topHtml,
      bottomHtml,
      title: yamlObj.title,
      subtitle: yamlObj.subtitle,
    };
  }

  isAPIHeader(node) {
    if (node.type !== 'heading') return false;
    return node.children[0].value === 'API';
  }

  ast2Html(ast) {
    const hast = toHast(ast);
    return hastToHtml(hast);
  }

  componentDidMount() {
    Prism.highlightAll();
    const usageNode = document.querySelector('h3.usage');
    const demosNode = document.querySelectorAll('.demos h3');
    const apiNode = document.querySelector('.api-section>h2');
    const nodeArr = Array.from(demosNode);
    nodeArr.unshift(usageNode);
    nodeArr.push(apiNode);
    const h3Arr = nodeArr.map(item => ({
      title: item.innerText.split('：')[0],
      top: item.getBoundingClientRect().top,
    }));
    this.setState({ h3Arr });
  }

  handleClick = (e, link) => {
    e.preventDefault();
    let top = +(link.href.split('>>')[1]);
    window.pageYOffset = +top;
    document.documentElement.scrollTop = +top;
    document.body.scrollTop = +top;
  };

  render() {
    const { topHtml, bottomHtml, title, subtitle, h3Arr } = this.state;
    const { name } = this.props;

    return (
      <div className={styles.pageWrapper}>
        <div className={styles.left}>
          <h1 style={{marginBottom: 20}}>
            {title}
            &nbsp;&nbsp;
            {subtitle}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: topHtml }} className="markdown-body" />
          <h3 style={{ marginTop: 20, fontSize: 17 }} className="usage">引用方式：</h3>
          <pre>
            <code className="language-jsx">
              import {name} from '~/component/{name}';
            </code>
          </pre>
          <h2 style={{ marginTop: 40, marginBottom: 30 }}>代码演示</h2>
          <div className="demos">
            {this.props.children}
          </div>
          <div dangerouslySetInnerHTML={{ __html: bottomHtml }} className="markdown-body api-section" />
        </div>
        <div className={styles.right}>
          <Anchor affix={true} onClick={this.handleClick} offsetTop={10}>
          {
            h3Arr && h3Arr.map(item => (
              <Link href={`#${item.title}>>${item.top}`} title={item.title} top={item.offsetTop} />
            ))
          }
          </Anchor>
        </div>
      </div>
    );
  }
}
