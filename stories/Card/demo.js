import React from 'react';
import Card from '~/component/Card';
import { Row, Col } from 'antd';

const CardCover = Card.Cover;

const cover1 = [
  {
    title: '新建金融时序模型',
    // link: '/model/add/finTiming',
  },
  {
    title: '新建金融工程模型',
    // link: '/model/add/finEngr',
  },
  {
    title: '从PAI平台导入',
    // link: '/model/add/pai',
  },
  {
    title: '从模型预测平台导入',
    // link: '/model/add/onlinePred',
  },
];

export default () => (
  <div style={{background: '#f2f4f5', padding: 10}}>
    <Row gutter={30}>
      <Col sm={24} md={12}>
        <Card
          img="//gw.alipayobjects.com/zos/rmsportal/DnQnjMlXruvAvuFvFcIx.png"
          title="新建模型"
          desc="你可以从这里新建金融时序模型，金融工程模型，或是从 PAI 平台，模型预测平台导入已有模型"
        >
          <CardCover data={cover1} />
        </Card>
      </Col>
      <Col sm={24} md={12}>
        <Card
          img="//gw.alipayobjects.com/zos/rmsportal/OhbHENCMtAqNmVRHSdri.png"
          title="新建指标"
          desc="你可以从这里创建基础指标或者衍生指标"
        />
      </Col>
    </Row>
    <Row gutter={30}>
      <Col sm={24} md={12}>
        <Card
          img="//gw.alipayobjects.com/zos/rmsportal/fBeOYnScRnPwWhCaLHdf.png"
          title="搜索模型"
          desc="搜索模型将根据关键字、业务领域、模型Owner搜索关联的模型列表和详情信息"
        />
      </Col>
      <Col sm={24} md={12}>
        <Card
          img="//gw.alipayobjects.com/zos/rmsportal/qKmIvIGbrBoRHukZIWyK.png"
          title="搜索指标"
          desc="搜索指标将根据关键字、业务领域、指标Owner搜索关联的指标列表和详情信息"
        />
      </Col>
    </Row>
  </div>
);
