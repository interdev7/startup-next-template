import { Layout } from "antd";
import Content from "./layout/content/Content";
import Header from "./layout/header/Header";
const { Sider, Footer } = Layout;
export default function CustomLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider>Sider</Sider>
        <Content>{children}</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
