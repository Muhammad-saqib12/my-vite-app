import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Table";

const columns = [  "Category", "Sub category","Code","Description","Status"];

const rows = [
  {
    
    category: "Computers",
    subcategory: "Computers",
    code: "CT001",
    description: "Computers description",
    status: "Active",
  },
  {
     
    category: "Fruits",
    subcategory: "Fruits",
    code: "CT002",
    description: "Fruits description",
    status: "Active",
  },
  {
     
    category: "Fruits",
    subcategory: "Fruits",
    code: "CT003",
    description: "Fruits description",
    status: "Active",
  },
  {
     
    category: "Fruits",
    subcategory: "Fruits",
    code: "CT004",
    description: "Fruits description",
    status: "Active",
  },
  {
     
    category: "Accessories",
    subcategory: "Accessories",
    code: "CT005",
    description: "Accessories description",
    status: "Active",
  },
  {
     
    category: "Shoes",
    subcategory: "Shoes",
    code: "CT006",
    description: "Shoes description",
    status: "Active",
  },
  {
     
    category: "Fruits",
    subcategory: "Fruits",
    code: "CT007",
    description: "Fruits description",
    status: "Active",
  },
];

export default function SubCategory() {
  return (
    <Layout>
      <div>
        <Table
        title="SubCategory"
        description="Manage Category"
          columns={columns}
          rows={rows}
        />
      </div>
    </Layout>
  );
}
