import React from 'react';
import Layout from '../Components/Layout';
import Table from '../Components/Table';

const columns = [
  

    "SKU" ,
    "Product" ,
   "Manufactured" ,
   "Expired" ,
];

const rows = [
  { sku: "PT001", product: "Lenovo 3rd Generation", manufactured: "19-Nov-2022", expired: "02 Jan 2023" },
  { sku: "PT002", product: "Nike Jordan", manufactured: "24 Nov 2022", expired: "23 Jan 2023" },
  { sku: "PT003", product: "Apple Series 5 Watch", manufactured: "11 Dec 2022", expired: "18 Feb 2023" },
  { sku: "PT004", product: "Amazon Echo Dot", manufactured: "27 Dec 2022", expired: "24 Feb 2023" },
  { sku: "PT005", product: "Lobar Handy", manufactured: "08 Jan 2023", expired: "16 Mar 2023" },
  { sku: "PT006", product: "Red Premium Handy", manufactured: "17 Jan 2023", expired: "29 Mar 2023" },
  { sku: "PT007", product: "Red Premium Handy", manufactured: "22 Feb 2023", expired: "04 Apr 2023" },
  { sku: "PT008", product: "Black Slim 200", manufactured: "18 Mar 2023", expired: "13 May 2023" },
  { sku: "PT009", product: "Woodcraft Sandal", manufactured: "29 Mar 2023", expired: "27 May 2023" },
];

export default function ExpiredProducts() {
  return (
    <Layout>
      <div>
        <Table columns={columns}
         rows={rows} />
      </div>
    </Layout>
  );
}
