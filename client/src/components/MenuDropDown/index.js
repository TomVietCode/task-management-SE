import React from "react";
import { Dropdown, Menu } from "antd";

const MenuDropdown = ({ items, triggerElement }) => {
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return <Dropdown overlay={menu} trigger={["click"]}>{triggerElement}</Dropdown>;
};

export default MenuDropdown;
