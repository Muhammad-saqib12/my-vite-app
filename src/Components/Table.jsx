"use client";
import React, { useState, useMemo } from "react";
import {
  FileSpreadsheet,
  FileText,
  RefreshCcw,
  ChevronDown,
  Search,
  Pencil,
  Trash2,
  Check,
  X,
} from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price || !qty || !unit) {
      return alert("Please fill all fields");
    }

    const newProduct = {
      productname: name,
      category,
      price,
      qty,
      unit,
    };

    onAddProduct(newProduct);

    // Reset all fields
    setName("");
    setCategory("");
    setPrice("");
    setQty("");
    setUnit("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-100">
      <div className="bg-white p-10 rounded-3xl w-full max-w-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Add New Product
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="border p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Unit (e.g., pcs, kg, ltr)"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-lg font-semibold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default function Table({ rows = [], columns = [], title,button,onButtonClick }) {
  const [tableRows, setTableRows] = useState(rows);
  const [editIndex, setEditIndex] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchText, setSearchText] = useState("");

  const exportExcel = () => {
    const data = filteredRows.map((row) =>
      columns.map((col) => row[col.toLowerCase().replace(/\s+/g, "")])
    );
    const worksheet = XLSX.utils.aoa_to_sheet([columns, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "exported_table_data.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableData = filteredRows.map((row) =>
      columns.map((col) => row[col.toLowerCase().replace(/\s+/g, "")])
    );
    doc.autoTable({
      head: [columns],
      body: tableData,
    });
    doc.save("exported_table_data.pdf");
  };

  const handleDelete = (indexToDelete) => {
    const confirmed = window.confirm("Are you sure you want to delete this record?");
    if (confirmed) {
      const updatedRows = tableRows.filter((_, index) => index !== indexToDelete);
      setTableRows(updatedRows);
    }
  };

  const handleEdit = (row, index) => {
    setEditIndex(index);
    setEditedRow({ ...row });
  };

  const handleChange = (key, value) => {
    setEditedRow((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = (index) => {
    const updated = [...tableRows];
    updated[index] = editedRow;
    setTableRows(updated);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleAddProduct = (product) => {
    setTableRows((prev) => [...prev, product]);
  };

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(tableRows.map((_, idx) => idx));
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRowSelection = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // 🔍 Filtered rows based on search text
  const filteredRows = useMemo(() => {
    if (!searchText.trim()) return tableRows;

    return tableRows.filter((row) =>
      columns.some((col) => {
        const key = col.toLowerCase().replace(/\s+/g, "");
        return row[key]?.toString().toLowerCase().includes(searchText.toLowerCase());
      })
    );
  }, [tableRows, columns, searchText]);

  return (
    <div className="bg-gray-100 w-full min-h-screen text-[16px]">
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-10 py-6 gap-5">
        {(title) && (
          <div className="flex flex-col gap-1">
            {title && <h1 className="text-black font-bold text-3xl">{title}</h1>}
            
            {selectedRows.length > 0 && (
              <p className="text-orange-500 font-semibold">Selected: {selectedRows.length}</p>
            )}
          </div>
        )}

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          <button className="w-11 h-11 flex items-center justify-center rounded border border-gray-300 text-gray-700 hover:bg-gray-200">
            <ChevronDown size={26} />
          </button>

          <button
            title="Export as PDF"
            onClick={exportPDF}
            className="w-11 h-11 flex items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-100"
          >
            <FileText size={26} />
          </button>

          <button
            title="Export as Excel"
            onClick={exportExcel}
            className="w-11 h-11 flex items-center justify-center rounded border border-green-200 text-green-600 hover:bg-green-100"
          >
            <FileSpreadsheet size={26} />
          </button>

          <button
            title="Refresh"
            className="w-11 h-11 flex items-center justify-center rounded border border-blue-200 text-blue-600 hover:bg-blue-100"
          >
            <RefreshCcw size={26} />
          </button>

          <button
             onClick={onButtonClick}
            className="flex items-center gap-2 px-6 py-3 text-lg bg-orange-500 text-white hover:bg-orange-600 border border-orange-600 rounded-lg font-semibold"
          >
            {button}
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl px-10 pt-10 pb-10 w-full max-w-[1650px] mx-auto h-[1200px] overflow-y-auto">
       <table className="min-w-full text-[16px]">
          <thead>
            <tr className="bg-gray-200 text-left font-bold text-gray-700 h-16">
              <th className="px-5 py-4">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={selectedRows.length === tableRows.length && tableRows.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              {columns.map((col, index) => (
                <th key={index} className="px-5 py-4">
                  {col}
                </th>
              ))}
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 h-[70px] text-gray-800">
                <td className="px-5 py-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={selectedRows.includes(idx)}
                    onChange={() => toggleRowSelection(idx)}
                  />
                </td>
                {columns.map((col, index) => {
                  const key = col.toLowerCase().replace(/\s+/g, "");
                  return (
                    <td key={index} className="px-5 py-3">
                      {editIndex === idx ? (
                        <input
                          className="border px-2 py-1 rounded w-full"
                          value={editedRow[key] || ""}
                          onChange={(e) => handleChange(key, e.target.value)}
                        />
                      ) : (
                        row[key]
                      )}
                    </td>
                  );
                })}
                <td className="px-5 py-3">
                  <div className="flex gap-3">
                    {editIndex === idx ? (
                      <>
                        <button
                          onClick={() => handleSave(idx)}
                          className="w-10 h-10 flex items-center justify-center border border-green-200 text-green-600 hover:bg-green-100 rounded"
                        >
                          <Check size={20} />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100 rounded"
                        >
                          <X size={20} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="w-10 h-10 flex items-center justify-center border border-red-200 text-red-600 hover:bg-red-100 rounded"
                        >
                          <Trash2 size={20} />
                        </button>
                        <button
                          onClick={() => handleEdit(row, idx)}
                          className="w-10 h-10 flex items-center justify-center border border-blue-200 text-blue-600 hover:bg-blue-100 rounded"
                        >
                          <Pencil size={20} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
