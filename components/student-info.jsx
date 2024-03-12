import React, { useState, useEffect } from 'react';

function StudentsInfo() {

    const [students, setstudents] = useState([]);

    useEffect(() => {


        const fetchstudents = async () => {

            try {

                const response = await fetch('https://sreenathkalluri.github.io/Syllabus/Syllabus.json');

                if (!response.ok) {

                    throw new Error('Failed to fetch students');

                }
                const data = await response.json();

                setstudents(data);

            } catch (error) {

                console.error('Error fetching Students:', error);

            }

        };
        fetchstudents();

    }, []);

    return (

        <div className='container-fluid'>

            <h1 style={{ textAlign: "left" }}>Student Details</h1>
            <table>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "left", width: "100px" }}></td>
                        <td style={{ textAlign: "left", width: "300px" }} >Name</td>
                        <td style={{ textAlign: "left", width: "150px" }}>RollNo</td>
                        <td style={{ textAlign: "left", width: "100px" }}>EmailID</td>
                    </tr>
                    {students.map((Student, index) => (
                        <>
                            <tr>
                                <td style={{ textAlign: "left" }}>
                                    {index + 1}
                                </td>
                                <td style={{ textAlign: "left" }}>
                                    {Student.Name}
                                </td>
                                <td style={{ textAlign: "left" }}>
                                    {Student.RollNo}
                                </td>
                                <td style={{ textAlign: "left" }}>
                                    {Student.EmailID}
                                </td>

                            </tr></>


                    ))}

                </tbody>
            </table>


        </div>

    );

}

export default StudentsInfo;