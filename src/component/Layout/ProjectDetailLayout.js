import React from 'react';
import { message } from 'antd';
import { connect } from '@alipay/bigfish/sdk';
import history from 'history';
import { Spin } from 'antd';

@connect(({ project, loading }) => ({
  project
}))
class ProjectDetailLayout extends React.PureComponent {
  timer = null;
  componentDidMount() {
    const { projectId } = this.props.params;
    this.props.dispatch({
      type: 'project/currect',
      payload: {
        projectId
      }
    });
    const self = this;
    this.timer = setInterval(() => {
      const { params, project } = this.props;
      const { loading, data } = project.my;
      if (!loading) {
        clearInterval(self.timer);
        const list = data && data.data || [];
        // http://framodelweb.dev.alipay.net:7001/project/11
        const find = list.find(project => project.id === parseInt(params.projectId, 10));
        // 没有找到，则表示无权限
        if (!find) {
          message.error('无权访问此项目');
          history.push('/projectManager/dashboard');
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    const { projectId } = this.props.project.currect;
    if (!projectId) {
      return <Spin/>;
    }
    return (
     <div>{this.props.children}</div>
    );
  }
}

export default ProjectDetailLayout;
