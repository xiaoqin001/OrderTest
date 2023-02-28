import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AsignTable() {
    const [tableOptions, setTableOptions] = useState([]);
    const [employeeOptions, setEmployeeOptions] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');

    useEffect(() => {
      // 从API端点获取桌子数据
      axios.get('/api/tables')
        .then((response) => {
          // 将桌子数据转换为选项列表
          const options = response.data.map(table => ({
            value: table.id,
            label: `Table ${table.number}`
          }));
          setTableOptions(options);
        })
        .catch((error) => {
          console.log(error);
        });

      // 从API端点获取员工数据
      axios.get('/employees')
        .then((response) => {
          // 将员工数据转换为选项列表
          const options = response.data.map(employee => ({
            value: employee.id,
            label: employee.name
          }));
          setEmployeeOptions(options);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('/orders', {
        table_id: selectedTable,
        employee_id: selectedEmployee
      })
      .then((response) => {
        console.log(response);
        // 成功提交订单
      })
      .catch((error) => {
        console.log(error);
        // 订单提交失败
      });
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Table No.:
          <select value={selectedTable} onChange={(event) => setSelectedTable(event.target.value)} required>
            <option value="">Please select table</option>
            {tableOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label>
          Employee No.:
          <select value={selectedEmployee} onChange={(event) => setSelectedEmployee(event.target.value)} required>
            <option value="">Please select employees</option>
            {employeeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default AsignTable;
