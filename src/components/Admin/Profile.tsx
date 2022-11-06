import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Breadcrumb from "../Breadcrumb";

export default function ProfileComponent() {
  return <div className=' w-full p-4'>
    <Breadcrumb icon={faUser} pageName="Profile" />
  </div>;
}
