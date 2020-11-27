import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";

function Nav({ query, onInputChange, onSortChange, currentKey, currentOrder }) {
  const sorts = [
    {
      key: "firstName",
      label: "First Name",
    },
    {
      key: "lastName",
      label: "Last Name",
    },
    {
      key: "phone",
      label: "Phone Number",
    },
  ];

  return (
    <>
      <Jumbotron className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-0 mx-auto' style={{padding: '15px'}}>
        <a className='navbar-brand bg-primary title mx-auto' href='/'>
        Employee Directory
      </a>
      </Jumbotron>
      <div className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-2 header'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
           
            {sorts.map(({ key, label }) => (
              <li key={key} className='nav-item m-1'>
                <button
                  style={currentKey === key ? { color: "orangered" } : {}}
                  onClick={() =>
                    onSortChange(key, currentOrder === "asc" ? "desc" : "asc")
                  }
                  className='btn'
                >
                  {label} {
                    currentKey !== key
                      ? ""
                      : currentOrder === "asc"
                        ? (<i className="fas fa-chevron-circle-down"></i>)
                        : (<i className="fas fa-chevron-circle-up"></i>)
                  }
                </button>
              </li>
            ))}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              onChange={onInputChange}
              className='form-control mr-sm-2'
              type='search'
              value={query}
              placeholder='Search'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Nav;