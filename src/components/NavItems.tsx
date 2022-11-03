import React from "react";

import { routes } from "../utils/routes";
import NavItem from "./NavItem";

const NavItems = ({ isOpen }: any) => {
  let items: any = [];

  routes.map(({ name, path, icon }) => {
    items.push({
      name,
      path,
      icon,
      isOpen,
    });
  });
  return (
    <ul className="flex flex-col gap-2">
      {items.map(({ name, path, icon, isOpen }: any) => {
        <NavItem
          key={path}
          path={path}
          name={name}
          icon={icon}
          isOpen={isOpen}
        />;
      })}
      ;
    </ul>

  );
};

export default NavItems;
