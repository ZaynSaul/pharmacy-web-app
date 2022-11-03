import React from "react";
import PermissionComponent from "../../components/Admin/Permission";
import Layout from "../../components/Layouts/Layout";

export default function permission() {
  return (
    <Layout title="Permissions">
      <PermissionComponent />
    </Layout>
  );
}
