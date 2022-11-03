import React from "react";
import ProfileComponent from "../../components/Admin/Profile";
import Layout from "../../components/Layouts/Layout";

export default function profile() {
  return (
    <Layout title="Profile">
      <ProfileComponent />
    </Layout>
  );
}
