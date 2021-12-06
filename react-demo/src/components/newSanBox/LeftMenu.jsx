import React from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import "./index.css"
import { Layout, Menu  } from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu


function LeftMenu(props) {

  axios.get("http://localhost:3000/posts").then(res => console.log(res.data))

  const menuList = [
    {
      key: '/home',
      icon: <UserOutlined/>,
      title: "首页"
    },
    {
      key: '/user-manage',
      icon: <UserOutlined/>,
      title: "用户管理",
      children: [
        {
          key: '/user-manage/list',
          icon: <UserOutlined/>,
          title: "用户列表"      
        },
      ]
    },
    {
      key: '/right-manage',
      icon: <UserOutlined/>,
      title: "权限管理",
      children: [
        {
          key: '/right-manage/role/list',
          icon: <UserOutlined/>,
          title: "角色列表"      
        },
        {
          key: '/right-manage/right/list',
          icon: <UserOutlined/>,
          title: "权限列表"      
        }
      ]
    },
  ]

  function renderMenu(menuList){
    return menuList.map(menu => {
      if(menu.children){
        return <SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
          {renderMenu(menu.children)}
        </SubMenu>
      }
      return <Menu.Item key={menu.key} icon={menu.icon} onClick={ () => { props.history.push(menu.key) } } >{ menu.title }</Menu.Item>
    })
  }

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">测试管理系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
        { renderMenu(menuList) }
      </Menu>
    </Sider>
  )
}

export default withRouter(LeftMenu)
