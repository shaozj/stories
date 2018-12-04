import React from 'react';
import { connect } from '@alipay/bigfish/sdk';

@connect(({ project, loading }) => ({
  project
}))
class ProjectLayout extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch({
      type: 'project/queryMyList',
    });
  }
  
  render() {
    return (
     <div>{this.props.children}</div>
    );
  }
}

export default ProjectLayout;
