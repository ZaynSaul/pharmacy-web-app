import React from "react";
import EmployeeComponent from "../../components/Admin/Employee";
import Layout from "../../components/Layouts/Layout";

export default function user() {
  return (
    <Layout title="Employees">
      <EmployeeComponent />
    </Layout>
  );
}
