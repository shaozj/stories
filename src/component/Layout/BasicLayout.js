import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Card, message, Button } from 'antd';
import { Link } from 'react-router-dom';
import DocumentTitle from '@alipay/bigfish/util/react-document-title';
import { connect } from '@alipay/bigfish/sdk';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../../component/GlobalHeader';
import GlobalFooter from '../../component/GlobalFooter';
import SiderMenu from '../../component/SiderMenu';
import pageStyles from './BasicLayout.less';

const logo = 'https://gw.alipayobjects.com/zos/rmsportal/khrDkexgBWqEPvInNhvC.svg';

const { Content, Header, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path.startsWith('/') ? item.path : `/${item.path}`] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path.startsWith('/') ? item.path : `/${item.path}`] = { ...item };
    }
  });
  return keys;
}

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

@connect((state) => {
  return {
    currentUser: state.user.currentUser,
    collapsed: state.global.collapsed,
    fetchingNotices: state.global.fetchingNotices,
    notices: state.global.notices,
    menuData: state.menu.data,
    myProjects: state.project.my
  };
})
class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };
  state = {
    isMobile,
  };
  getChildContext() {
    const { location, menuData } = this.props;
    return {
      location,
      // 默认使用 menu 数据生成面包屑
      breadcrumbNameMap: getFlatMenuData(menuData),
    };
  }
  componentDidMount() {
    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    });
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }
  handleMenuCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };
  handleNoticeClear = (type) => {
    message.success(`清空了${type}`);
    this.props.dispatch({
      type: 'global/clearNotices',
      payload: type,
    });
  };
  handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
  };
  handleNoticeVisibleChange = (visible) => {
    if (visible) {
      this.props.dispatch({
        type: 'global/fetchNotices',
      });
    }
  };
  render() {
    const { collapsed, fetchingNotices, notices, location, menuData, currentUser, myProjects } = this.props;
    const { pathname } = this.props.location;
    const { params } = this.props;
    const isProjectSettingPage = pathname === '/projectManager' || pathname === '/projectManager/approvals' || pathname === '/projectManager/dashboard';
    const notHasMyProject = myProjects.loading === false && myProjects.data.data.length === 0;
    // 没有项目数据，且非管理页面，展示引导提示
    const isShowProjectGuide = notHasMyProject && !isProjectSettingPage;
    const layout = (
      <Layout>
        <SiderMenu
          logo={logo}
          menuData={menuData}
          collapsed={collapsed}
          location={location}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              fetchingNotices={fetchingNotices}
              notices={notices}
              collapsed={collapsed}
              isMobile={this.state.isMobile}
              onNoticeClear={this.handleNoticeClear}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              onNoticeVisibleChange={this.handleNoticeVisibleChange}
              currentUser={currentUser}
              myProjects={myProjects}
              dispatch={this.props.dispatch}
              location={this.props.location}
              params={params}
            />
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            { !isShowProjectGuide && <div style={{ minHeight: 'calc(100vh - 260px)' }}>{this.props.children}</div>}
            { isShowProjectGuide && <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              <Card className={pageStyles.guide2ProjectSetting}>
                <p>请先申请加入项目&nbsp;（未找到请联系 <a rel="noopener noreferrer" href="https://work.antfinancial-corp.com/nwpipe/u/153097" target="_blank">驰欢</a>）</p>
                <Link to="/projectManager/dashboard">
                  <Button type="primary">项目列表</Button>
                </Link>
              </Card>
            </div>}
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright" /> 2018 蚂蚁金服-金融核心
                </Fragment>
              }
            />
          </Footer>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title="金融计量中心">
        <ContainerQuery query={query}>
          {(params) => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default BasicLayout;
