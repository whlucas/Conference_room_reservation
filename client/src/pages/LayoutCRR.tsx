import React from "react"
import { NavLink, Route } from "react-router-dom"
import Home from "./home/Home"
import MySelf from "./myself/Myself"
import Administration from "./administration/Administration"
import logo from "../assets/logo.png"
import img from "../assets/11111.png"
import portrait from "../assets/222.jpg"
import {
    FileDoneOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, PageHeader } from "antd"
import './LayoutCRR.scss'
const { Header, Sider, Content } = Layout;


// 写一个函数组件
// 利用它给我们提供的泛型
const LayoutCRR: React.FC = () => {
    return (
        <div className="container">
            <Layout>
                <Header style={{zIndex: 1, width: '100%', display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <PageHeader
                                className="site-page-header"
                                onBack={() => null}
                                title="新疆油田数据公司"
                                backIcon={null}
                            />
                            <span className="main-bottom-title">www.xjyt.petrochina</span>
                        </div>
                        <div className='verticalLine'></div>
                        <span className="sub-bottom-title">会议管理系统</span>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <NavLink to="/">首页</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/myself">我的</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/administration">管理</NavLink>
                        </Menu.Item>
                    </Menu>
                    <div className="menu-right">
                        <span>吐槽RD: 1234567</span>
                        <span>吐槽PM: 7654321</span>
                        <div className="user">
                            <img src={portrait} alt=""/>
                        </div>
                    </div>
                </Header>
                <Content className="site-layout">
                    <div className="main">
                        <Route path="/" component={Home} exact={true}></Route>
                        <Route path="/myself" component={MySelf} exact={true}></Route>
                        <Route path="/administration" component={Administration} exact={true}></Route>
                    </div>
                    {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <img src={img} alt=""/>
                    </div> */}
                </Content>
            </Layout>,
        </div>
    )
}

export default LayoutCRR