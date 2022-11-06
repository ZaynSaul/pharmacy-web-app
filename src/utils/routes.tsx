import {
  faShop,
  faUserAlt,
  faDashboard,
  faHandHoldingMedical,
  faUserCog,
  faCalendarAlt,
  faBell,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  name: string;
  path: string;
  icon: any;
};

// TopBar routes
export const topBarRoutes = [
  {
    icon: faCalendarAlt
  },
  {
    icon: faComments
  },
  {
    icon: faBell
  },
]
// Sidebar routes
export const routes = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: faDashboard,
  },
  {
    name: "Purchase",
    path: "/admin/purchase",
    icon: faShop,
  },
  {
    name: "Product",
    path: "/admin/product",
    icon: faHandHoldingMedical,
  },
  {
    name: "Employees",
    path: "/admin/user",
    icon: faUserAlt,
  },
];

export const settingRoutes = [
  {
    name: "Profile",
    path: "/admin/profile",
    icon: faUserAlt,
  },
  {
    name: "Permission",
    path: "/admin/permission",
    icon: faUserCog,
  },

];
