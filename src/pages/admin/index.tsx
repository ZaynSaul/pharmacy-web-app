import React from "react";
import Dashboard from "../../components/Admin/Dashboard";
import Layout from "../../components/Layouts/Layout";

export default function index() {
  return (
    <Layout title="Dashboard">
      <Dashboard />
    </Layout>
  );
}
