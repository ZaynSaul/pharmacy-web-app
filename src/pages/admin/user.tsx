import React, { useState } from "react";
import { gql, useQuery } from '@apollo/client';
import EmployeeComponent from "../../components/Admin/Employee";
import Layout from "../../components/Layouts/Layout";
import client from "../../../apollo-client";

type Props = {
  userData: any[];

};
export default function User(props: Props) {
  const { userData } = props;

  const [userList, setUserData] = useState(userData);
  return (
    <Layout title="Employees">
      <EmployeeComponent />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query users{
//         name,
//         email,
//         uType
        
//       }
//       `,
//   });
//   return {
//     props: {
//       userData: data.users,
//     },
//   };
// }
