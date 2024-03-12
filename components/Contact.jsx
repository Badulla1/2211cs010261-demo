import React from 'react';

const Skills = (student) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ color: '#0288d1' }}>Contact Details</h2>
        <hr style={{ border: '1px solid #03a9f4', margin: '10px 0' }} />
        <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
          <tbody>
            <tr>
              <td><b style={{ color: '#0288d1' }}>Email:</b></td>
              <td>{student.Email}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#0288d1' }}>Phone:</b></td>
              <td>{student.Phone}</td>
            </tr>
            <tr>
              <td><b style={{ color: '#0288d1' }}>Address:</b></td>
              <td>{student.Address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
