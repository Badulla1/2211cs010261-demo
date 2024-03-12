import React from 'react';
import photo from './Sreenath.jpg';

const Student = (student) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#4527a0' }}>Student Details</h2>
        <hr style={{ border: '1px solid #9575cd', margin: '10px 0' }} />
        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
          <tbody>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Roll No:</b></td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}><b style={{ color: '#4527a0' }}>Name:</b></td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>{student.Name}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Education:</b></td>
              <td>{student.Education}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Course:</b></td>
              <td>{student.Course}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Branch:</b></td>
              <td>{student.branch}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Admission No:</b></td>
              <td>{student.Add}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Father Name:</b></td>
              <td>{student.Father}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Father Occupation:</b></td>
              <td>{student.Focc}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Mother Name:</b></td>
              <td>{student.Mother}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Mother Occupation:</b></td>
              <td>{student.Mooc}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>DOB:</b></td>
              <td>{student.DOB}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#4527a0' }}>Gender:</b></td>
              <td>{student.Gender}</td>
            </tr>
          </tbody>
        </table>
        <img src={photo} alt="Sreenath" width="120" height="180" style={{ marginLeft: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} />
      </div>
    </div>
  );
};

export default Student;
