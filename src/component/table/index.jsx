/* eslint-disable react/prop-types */

import "./index.scss"
function Table({columns=[], dataSource=[]}) {
    /* header
    columns=
        [
            {
            title: "name",
            dataIndex: "name",
            }
        ]
    */

   /* data
   dataSource=
   [
   data: {id: 1, name: "Alice", age: 20}
   ]

   // lay attribute name cua data 
   data.name || data['name']
   */
  return (
    <table className="table" border={1}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {dataSource => tr} */}
        {/* {columns => td} */}
        {dataSource.map((data, index) => (
          <tr key={data.id}>
            {columns.map((column) => (
              // <td key={dataSource[column.dataIndex]}>
              //   {dataSource[column.dataIndex]}
              <td key={column.dataIndex}>
                {/* th1 :=> in value */}
                {/* th2:=> in customize render */}
                {/* Kiểm tra sự tồn tại của column.render trước khi gọi nó */}
                {/* column.render : check co ton tai hay ko ? show ra cai ng dung hien thi : in ra gia tri*/}
                {column.render ? column.render(data,index) : data[column.dataIndex]}       
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
