import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Lang() {
  const { t } = useTranslation("lang");
  const menu = (
    <Menu>
      <Menu.Item>
        <Link locale="ru" href={""}>
          {t("russian")}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link locale="en" href={""}>
          {t("english")}
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown
        trigger={["click"]}
        overlay={menu}
        arrow
        placement="bottomRight"
      >
        <Button shape="circle" icon={<GlobalOutlined />} />
      </Dropdown>
    </div>
  );
}
