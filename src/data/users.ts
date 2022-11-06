export const users = [
  {
    name: "Jane Doe",
    email: "jdoe@user.com",
    address: "brikama",
    phone: "1234567",
  },
  {
    name: "John Doe",
    email: "jdoe@user.com",
    address: "banjul",
    phone: "4434567",
  },
  {
    name: "Bucky Robert",
    email: "broberts@user.com",
    address: "Bundung",
    phone: "4534567",
  },
];

export const userColumns = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "address",
    title: "Address",
    dataIndex: "address",
  },
  {
    key: "phone",
    title: "Phone",
    dataIndex: "phone",
  },
  {
    key: "action",
    title: "Phone",
    dataIndex: "phone",
    Render: () => {
      return null;
    },
  },
];
