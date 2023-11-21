import React from 'react'
import Table from './Table';
export default function Tabledata() {

    const data = [
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 42 },
      ];
    
      const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
      ];
    
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}
