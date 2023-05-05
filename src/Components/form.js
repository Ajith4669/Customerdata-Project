import React from "react";
import {
  BellFilled,
  HomeOutlined,
  AppstoreOutlined,
  FileOutlined,
  LayoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Input, Space, Tooltip, Avatar, Badge } from "antd";

import "../App.css";
import CardDesign from "./card-design";
import Page from "../utlis/page/page";

const { Header, Content, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const FormPage = () => {
  return (
    <Page>
      <Layout>
        <Header style={{ backgroundColor: "#001529", position: "relative" }}>
          <Space style={{ marginLeft: "90%", marginBottom: "10%" }}>
            <Tooltip placement="topLeft" title="Country">
              <Avatar src="../flag.png"></Avatar>
            </Tooltip>
            <p style={{ marginBottom: "2%", fontSize: 15, color: "white" }}>
              EN
            </p>

            <Tooltip placement="topLeft" title="Notification">
              <Badge count={1}>
                <BellFilled style={{ fontSize: 30, color: "orange" }} />
              </Badge>
            </Tooltip>
            <br></br>
            <Tooltip placement="topLeft" title="Logout">
              <Avatar src="../human.png"></Avatar>
            </Tooltip>
          </Space>
        </Header>
        <Layout>
          <Sider width={200} style={{ height: "289vh", position: "relative" }}>
            <Menu
              theme="dark"
              className="menu"
              mode="inline"
              items={[
                getItem(
                  "Home",
                  "1",
                  <Link to="/box">
                    <HomeOutlined style={{ fontSize: "35px", color: "grey" }} />
                  </Link>
                ),
                getItem(
                  "Apps",
                  "2",
                  <Link to="/card-design">
                    <AppstoreOutlined
                      style={{ fontSize: "35px", color: "grey" }}
                    />
                  </Link>
                ),
                getItem(
                  "Activities",
                  "3",
                  <Link to="/table">
                    <FileOutlined style={{ fontSize: "35px", color: "grey" }} />
                  </Link>
                ),
                getItem(
                  "Insights",
                  "4",
                  <Link to="/raw-data">
                    <LayoutOutlined
                      style={{ fontSize: "35px", color: "grey" }}
                    />
                  </Link>
                ),
              ]}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                height: "100%",
                width: "100%",
              }}
            >
              <Layout>
                <Outlet />
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Page>
  );
};

export default FormPage;
