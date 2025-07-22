import React from 'react';
import Layout from '../Components/Layout';
import Table from '../Components/Table';

const columns = [ "SKU", "Product","Category","Brand","Price","Unit","Qty",];



const rows = [
  {
    
    sku: "PT001",
    product: "Lenovo 3rd Generation",
    category: "Electronics",
    brand: "Lenovo",
    price: 1999.99,
    unit: "Piece",
    qty: 5,
    
  },
  {
     
    sku: "PT002",
    product: "Nike Jordan",
    category: "Shoes",
    brand: "Nike",
    price: 299.99,
    unit: "Pair",
    qty: 10,
    
  },
  {
     
    sku: "PT003",
    product: "Apple Series 5 Watch",
    category: "Accessories",
    brand: "Apple",
    price: 499.99,
    unit: "Piece",
    qty: 4,
    
  },
  {
    
    product: "Amazon Echo Dot",
    category: "Electronics",
    brand: "Amazon",
    price: 129.99,
    unit: "Piece",
    qty: 6,
    
  },
  {
     
    sku: "PT005",
    product: "Lobar Handy",
    category: "Tools",
    brand: "Lobar",
    price: 89.99,
    unit: "Piece",
    qty: 12,
  
  },
  {
    
    sku: "PT006",
    product: "Red Premium Handy",
    category: "Tools",
    brand: "Red Premium",
    price: 109.99,
    unit: "Piece",
    qty: 8,
    
  },
  {
     
    sku: "PT007",
    product: "Red Premium Handy",
    category: "Tools",
    brand: "Red Premium",
    price: 109.99,
    unit: "Piece",
    qty: 3,
  
  },
  {
    
    sku: "PT008",
    product: "Black Slim 200",
    category: "Electronics",
    brand: "BlackTech",
    price: 149.99,
    unit: "Piece",
    qty: 9,
    
  },
  {
     
    sku: "PT009",
    product: "Woodcraft Sandal",
    category: "Shoes",
    brand: "Woodcraft",
    price: 79.99,
    unit: "Pair",
    qty: 11,
  
  }
];

export default function LowStocks() {
  return (
    <Layout>
      <div>
        <Table
        title="Low Stocks"
        description="Manage Stocks" columns={columns}
         rows={rows} />
      </div>
    </Layout>
  );
}
