import {
  faShop,
  faUserAlt,
  faDashboard,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  name: string;
  path: string;
  icon: any;
};

export const routes: Props[] = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: { faDashboard },
  },
  {
    name: "Purchase",
    path: "/admin/purchase",
    icon: { faShop },
  },
  {
    name: "Product",
    path: "/admin/product",
    icon: { faHandHoldingMedical },
  },
  {
    name: "Employees",
    path: "/admin/user",
    icon: { faUserAlt },
  },
];
