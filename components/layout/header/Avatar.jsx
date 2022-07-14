import { UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Dropdown } from "antd";
import useTranslation from "next-translate/useTranslation";

export default function ProfileAvatar() {
  const { t } = useTranslation("avatar");
  const menu = (
    <Menu>
      <Menu.Item>{t("profile")}</Menu.Item>
      <Menu.Item>{t("logout")}</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown trigger={["click"]} overlay={menu} arrow placement="bottomRight">
      <Avatar size={37} icon={<UserOutlined />} />
    </Dropdown>
  );
}
