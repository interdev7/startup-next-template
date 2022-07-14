import { Layout } from "antd";

export default function Content({ children }) {
  const { Content } = Layout;
  return <Content>{children}</Content>;
}
