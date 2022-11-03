import React from "react";

import {
  faEye,
  faLineChart,
  faMoneyBillTrendUp,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../Card";

export default function Stats() {
  return (
    <div className="w-full flex flex-col flex-wrap justify-between items-center gap-4 mt-4 font-nunito md:flex-row">
      <Card icon={faUser} text="Employee" count="15" bIcon={faEye} />
      <Card icon={faSackDollar} text="Sales" count="GMD 23,500" bIcon={faEye} />
      <Card icon={faMoneyBillTrendUp} text="Profit" count="28" bIcon={faEye} />
      <Card icon={faLineChart} text="Satisfaction" count="85%" bIcon={faEye} />
    </div>
  );
}
