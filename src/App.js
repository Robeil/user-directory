import React, { useState, useEffect } from "react";
import Nav from "./components/Header";
import EmployeeDirectory from "./pages/index";
import API from "./utils/API";
import sortFunctions from "./utils/sortFunctions";

function App() {
  // EmployeesList is the master list, derived from the API.
  const [employeesList, setEmployeesList] = useState([]);
  // Employees is the array to be modified with sorting & filtering.
  const [employees, setEmployees] = useState([]);

  const [searchOptions, setSearchOptions] = useState({
    key: "firstName",
    order: "asc",
    query: "",
  });

  const onQueryChange = (e) => {
    const { value } = e.target;

    setSearchOptions((currentSearchOptions) => ({
      ...currentSearchOptions,
      query: value,
    }));
  };

  const onSortChange = (key, order) => {
    setSearchOptions((currentSearchOptions) => ({
      ...currentSearchOptions,
      key,
      order,
    }));
  };

  // Load all employees and store them with setEmployeesList
  useEffect(() => {
    loadEmployeesList();
  }, []);

  // Only sets employees array once employeesList has changed.
  useEffect(() => {
    const modified = employeesList.map((e) => ({
      ...e,
      firstName: e.name.first,
      lastName: e.name.last,
      fullName: `${e.name.first} ${e.name.last}`,
    }));

    const filtered = modified.filter((employee) =>
      employee.fullName
        .toLowerCase()
        .includes(searchOptions.query.toLowerCase())
    );

    filtered.sort(
      sortFunctions.compareValues(searchOptions.key, searchOptions.order)
    );

    setEmployees(filtered);
  }, [employeesList, searchOptions]);

  // Loads all employees and sets them to employeesList
  async function loadEmployeesList() {
    try {
      const response = await API.getUsers();
      setEmployeesList(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Nav
        query={searchOptions.query}
        onInputChange={onQueryChange}
        onSortChange={onSortChange}
        currentKey={searchOptions.key}
        currentOrder={searchOptions.order}
      />
      <EmployeeDirectory employees={employees}></EmployeeDirectory>
    </div>
  );
}

export default App;
