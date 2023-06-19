import { useState } from "react";
import styles from "./side-nav.module.scss";
import { Button, Drawer, List } from "antd";
import {
  CalendarOutlined,
  ReadOutlined,
  YoutubeOutlined,
  CommentOutlined,
  MenuOutlined,
  HomeOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Sidenav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const items = [
    { icon: <HomeOutlined />, label: "Home", link: "/" },
    { icon: <CalendarOutlined />, label: "Calendar", link: "/calendar" },
    { icon: <ReadOutlined />, label: "News", link: "/news" },
    { icon: <CommentOutlined />, label: "About", link: "/about" },
    { icon: <YoutubeOutlined />, label: "Youtube", link: "/youtube" },
  ];

  return (
    <>
      <Button
        type="default"
        onClick={showDrawer}
        className={styles.drawerButton}
      >
        <MenuOutlined />
      </Button>

      <Drawer
        title={null}
        placement="left"
        onClose={onClose}
        closable={false}
        open={visible}
        className={styles.sideNavHeader}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-lg font-bold">
            <CloseOutlined />
          </button>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={<a href={item.link}>{item.label}</a>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default Sidenav;
{
  /* <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={visible}
      >
        <Menu mode="inline" onClick={onClose}>
          {items.map((item) => (
            <Menu.Item key={item.label} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer> */
}
