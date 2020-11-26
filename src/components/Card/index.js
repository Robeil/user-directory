import React from "react";
import './style.css';

export default function Card({ id, children }) {
  return (
    <div className="card employeeCard my-2" data-id={id} >
      {children}
    </div>
  );
}
