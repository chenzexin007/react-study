import React from 'react'
import { Route, Switch } from 'react-router'
import LeftMenu from '../../components/newSanBox/LeftMenu'
import TopHead from '../../components/newSanBox/TopHead'
import NotFound from '../not-found/NotFound'
import Home from './home/Home'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

import "./antCss.css"

// antd
import { Layout } from 'antd';
const { Content } = Layout;


export default function NewSanBox() {
  return (
    <Layout>
      <LeftMenu/>
      <Layout className="site-layout">
        <TopHead/>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user-manage/list" component={UserList}></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>
            <Route path="/right-manage/right/list" component={RightList}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
