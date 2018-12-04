import React from 'react';
import PageHeader from '~/component/PageHeader';

const breadcrumbList = [{
  title: '一级菜单',
  href: '/',
}, {
  title: '二级菜单',
  href: '/',
}, {
  title: '三级菜单',
}];

export default () => (
  <PageHeader title="页面标题" breadcrumbList={breadcrumbList} />
);
