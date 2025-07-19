import React from 'react'
import Layout from '../Components/Layout'
import Table from '../Components/Table'

const columns = [
  "SKU",
  "Product",
  "Category",
  "Start Date",
  "End Date"
];

const rows = [
  { sku: "PT001", product: "Lenovo 3rd Generation", category: "Electronics", startdate: "19 Nov 2022", enddate: "02 Jan 2023" },
  { sku: "PT002", product: "Nike Jordan", category: "Shoes", startdate: "24 Nov 2022", enddate: "23 Jan 2023" },
  { sku: "PT003", product: "Apple Series 5 Watch", category: "Wearables", startdate: "11 Dec 2022", enddate: "18 Feb 2023" },
  { sku: "PT004", product: "Amazon Echo Dot", category: "Smart Home", startdate: "27 Dec 2022", enddate: "24 Feb 2023" },
  { sku: "PT005", product: "Lobar Handy", category: "Tools", startdate: "08 Jan 2023", enddate: "16 Mar 2023" },
  { sku: "PT006", product: "Red Premium Handy", category: "Tools", startdate: "17 Jan 2023", enddate: "29 Mar 2023" },
  { sku: "PT007", product: "Red Premium Handy", category: "Tools", startdate: "22 Feb 2023", enddate: "04 Apr 2023" },
  { sku: "PT008", product: "Black Slim 200", category: "Electronics", startdate: "18 Mar 2023", enddate: "13 May 2023" },
  { sku: "PT009", product: "Woodcraft Sandal", category: "Shoes", startdate: "29 Mar 2023", enddate: "27 May 2023" },
];

export default function CreateProducts() {
  return (
    <Layout>
      <div>
        <Table
          columns={columns}
          rows={rows}
        />
      </div>
    </Layout>
  );
}
