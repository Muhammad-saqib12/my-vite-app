import React, { useState } from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Table";

const columns = [
  "SKU",
  "Product",
  "Category",
  "Start Date",
  "End Date",
];

const initialRows = [
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

export default function Products() {
  const [rows, setRows] = useState(initialRows);
  const [showModal, setShowModal] = useState(false);

  const [newProduct, setNewProduct] = useState({
    sku: "",
    product: "",
    category: "",
    startdate: "",
    enddate: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, newProduct]);
    setNewProduct({
      sku: "",
      product: "",
      category: "",
      startdate: "",
      enddate: "",
    });
    setShowModal(false);
  };

  return (
    <Layout>
      <div>
        <Table
          title="Products"
          description="Manage Products"
          columns={columns}
          rows={rows}
          button="Add new product"
          onButtonClick={() => setShowModal(true)}
        />

        {/* 🔽 Add Product Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                {["sku", "product", "category", "startdate", "enddate"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    type="text"
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    value={newProduct[field]}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ))}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
