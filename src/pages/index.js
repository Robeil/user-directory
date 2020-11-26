import React from 'react';
import Card from '../components/Card';
import { Container } from '../components/Grid';
import './style.css';

function EmployeeDirectory(props) {
  return (
    <Container fluid>
      {props.employees.length ? (
        <div className="card-deck d-flex justify-content-center">
          {
            props.employees.map(employee => {
              return (
                <Card key={employee.login.uuid.toString()} id={employee.login.uuid}>
                  <img className="card-img-top" src={employee.picture.large} alt={employee.name.first} />
                  <div className="card-body">
                    <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
                    <p className="card-text">Email: {employee.email}</p>
                    <p className="card-text">Phone: {employee.phone}</p>
                  </div>
                </Card>
              );
            })
          }
        </div>
      ) : (
        <div className="absoluteCenter"><div><i className="fas fa-spinner fa-pulse"></i></div></div>
        )}
    </Container>
  )
};

export default EmployeeDirectory;