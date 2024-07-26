import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import "./layout.css";
import { Layout, Menu, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import logo from '../assets/dashbo.png';
import logosm from '../assets/dashboard.jpeg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Userimg from '../assets/user-img.jpg';
import Container from 'react-bootstrap/Container';
import { PATH } from '../constants/path';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiBell } from 'react-icons/fi';
const { Header, Sider, Content } = Layout;

function Index() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [current, setCurrent] = useState('1');
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("dashboard-token");
  const { token: { colorBgContainer } } = theme.useToken();

  const openNav = useCallback(() => {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (sidebar && main) {
      sidebar.style.width = isSidebarExpanded ? "65px" : "250px";
      main.style.marginLeft = isSidebarExpanded ? "65px" : "250px";
      setIsSidebarExpanded(!isSidebarExpanded);
    }
  }, [isSidebarExpanded]);

  const handleResize = useCallback(() => {
    setCollapsed(window.innerWidth <= 992);
  }, []);

  useEffect(() => {
    openNav();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, openNav]);

  const onClick = (e: any) => {
    setCurrent(e.key);
    if (e.domEvent.target.textContent === "Dashboard") {
      navigate(PATH.DASHBOARD);
    }
  };

  return (
    <div className='h-100 antd-layout'>
      <Layout className='h-100'>
        <Sider collapsed={collapsed}>
          <div className="demo-logo-vertical">
            <a href='#'>
              <figure className='logo-expanded'>
                <img src={logo} alt="Expanded Logo" />
              </figure>
              <figure className='logo-collapsed'>
                <img src={logosm} alt="Collapsed Logo" />
              </figure>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            selectedKeys={[current]}
            onClick={onClick}
            items={[
              {
                key: '1',
                icon: <LuLayoutDashboard />,
                label: 'Dashboard',
              },
            ]}
          />
        </Sider>
        <Layout>
          <div id="main">
            <Header style={{ padding: 0, background: colorBgContainer }} className='layout-header'>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <div className="header-item d-flex align-items-center">
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container className='p-0'>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <NavDropdown
                          title={
                            <span className='d-flex user-dropdown'>
                              <img className='user-image' src={Userimg} alt="User" />
                              <div className='user-name'>
                                <p>Vineetha</p>
                                <label>Admin</label>
                              </div>
                            </span>
                          }
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item className='profile-item'>
                            <div className='profile-info'>
                              <label>Vineetha</label>
                              <label>Manager</label>
                              <label>vineetha@gmail.com</label>
                            </div>
                          </NavDropdown.Item>
                          <NavDropdown.Item onClick={() => navigate('/')}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </Header>
          </div>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Index;
