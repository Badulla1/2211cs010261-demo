import React from 'react';

const Student = (student) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#e8f5e9', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#388e3c' }}>Student Details</h2>
        <hr style={{ border: '1px solid #a5d6a7', margin: '10px 0' }} />
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>Batch:</b> {student.Batch}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>Admission:</b> {student.Addm}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>AdmnDate:</b> {student.Adate}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>Caste Category:</b> {student.Ca}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>Nationality:</b> {student.nation}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <b style={{ color: '#212121' }}>Scholarship:</b> {student.Scholarship}
        </div>
      </div>
    </div>
  );
};

export default Student;
