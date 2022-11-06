import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dashboard from "../../components/Admin/Dashboard";
import Layout from "../../components/Layouts/Layout";

export default function index() {
  return (
    <Layout title="Dashboard">
      <Dashboard />
    </Layout>
  );
}
// export const getServerSideProps = withPageAuthRequired();
