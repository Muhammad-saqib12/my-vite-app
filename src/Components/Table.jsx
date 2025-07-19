import React, { useState } from "react";
import {
  FileSpreadsheet,
  FileText,
  RefreshCcw,
  ChevronDown,
  Search,
  Pencil,
  Trash2,
} from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Dropdown component
const DropdownButton = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-6 py-3 text-lg bg-gray-100 hover:bg-orange-400 text-gray-800 border border-gray-300 rounded-lg font-semibold"
      >
        {label}
        <ChevronDown size={22} />
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-56 bg-white border border-gray-300 shadow-md rounded-lg">
          {options.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => setOpen(false)}
              className="px-5 py-3 hover:bg-orange-100 cursor-pointer text-base"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main table component
export default function Table({ rows = [], columns = [] }) {
  // 📤 Export Excel
  const exportExcel = () => {
    const data = rows.map((row) =>
      columns.map((col) => row[col.toLowerCase().replace(/\s+/g, "")])
    );

    const worksheet = XLSX.utils.aoa_to_sheet([columns, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "exported_table_data.xlsx");
  };

  // 📄 Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    const tableData = rows.map((row) =>
      columns.map((col) => row[col.toLowerCase().replace(/\s+/g, "")])
    );
    doc.autoTable({
      head: [columns],
      body: tableData,
    });
    doc.save("exported_table_data.pdf");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen text-[20px]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-10 py-6 gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-black font-bold text-3xl">Project List</h1>
          <p className="text-gray-600 text-lg">Manage your Projects</p>
        </div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search project..."
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

          <DropdownButton label="Add new product"options={["Add Manually", "Add Bulk", "Scan Barcode", "Upload CSV"]} className="text-white font-semibold text-lg bg-orange-500 hover:bg-orange-600 rounded-2xl px-6 py-3">
            
          </DropdownButton>

          <DropdownButton label="import product" options={["Import Excel", "Import JSON", "Sync Inventory", "Import via API"]}  className="text-white font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 rounded-2xl px-6 py-3">
            
          </DropdownButton>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white shadow-md rounded-2xl px-10 pt-10 pb-10 w-full max-w-[1650px] mx-auto h-[1200px] overflow-y-auto">
        <div className="flex flex-wrap gap-6 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-5">
            <DropdownButton label="Category" options={["Bags", "Electronics", "Shoes", "Chairs"]} />
            <DropdownButton label="Sort By: Last 7 days" options={["Today", "This Month", "All Time"]} />
          </div>
        </div>

        <table className="min-w-full text-[20px]">
          <thead>
            <tr className="bg-gray-200 text-left font-bold text-gray-700 h-16">
              <th className="px-5 py-4">
                <input type="checkbox" className="w-5 h-5" />
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
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 h-[70px] text-gray-800">
                <td className="px-5 py-3">
                  <input type="checkbox" className="w-5 h-5" />
                </td>
                {columns.map((col, index) => {
                  const key = col.toLowerCase().replace(/\s+/g, "");
                  return (
                    <td key={index} className="px-5 py-3">
                      {row[key]}
                    </td>
                  );
                })}
                <td className="px-5 py-3">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center border border-red-200 text-red-600 hover:bg-red-100 rounded">
                      <Trash2 size={20} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-blue-200 text-blue-600 hover:bg-blue-100 rounded">
                      <Pencil size={20} />
                    </button>
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
