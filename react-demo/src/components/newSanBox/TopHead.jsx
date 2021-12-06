import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHead() {
  const [collapsed, setCollapsed] = useState(false)
  const menu = (
    <Menu>
      <Menu.Item>
        超级管理员
      </Menu.Item>
      <Menu.Item danger>
        退出
      </Menu.Item>
    </Menu>
  )

  function changeCollapsed(){
    setCollapsed(!collapsed)
  }

  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      {
        collapsed? <MenuUnfoldOutlined onClick={ changeCollapsed }/> : <MenuFoldOutlined onClick={ changeCollapsed }/>
      }
      <div className="right" style={ { float: 'right' } }>
        欢迎admin回来
        <Dropdown overlay={menu}>
          <Avatar size={32} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
