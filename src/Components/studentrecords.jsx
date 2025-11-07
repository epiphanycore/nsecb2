import React from "react";
import styled from "styled-components";


const Th = styled.th`
    border: 0.1px solid #000;
    padding: 7px 25px;
    background-color: #000;
    color: #fff;
`;
const Td = styled.td`
    border: 0.1px solid #000;
    padding: 4px 25px;
    text-align: center;
`;
const studentrecords = () =>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <Th>Sno</Th>
                        <Th>Name</Th>
                        <Th>Father's Name</Th>
                         <Th>Mobile</Th>
                        <Th>Email ID</Th>
                        <Th>Address</Th>
                        <Th>Course</Th>
                         <Th>Session</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>1</Td>
                        <Td>Sucharita Biswas</Td>
                        <Td>Pradip Biswas</Td>
                        <Td>9874113368</Td>
                        <Td>sucharitab@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2023-27</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>2</Td>
                        <Td>Souryadeep Mukherjee</Td>
                        <Td>Hemarun Mukherjee</Td>
                        <Td>8420136171</Td>
                        <Td>smukherjee@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2023-27</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>3</Td>
                        <Td>Akshar Panti</Td>
                        <Td>Ashok Panti</Td>
                        <Td>8013610971</Td>
                        <Td>aksharp@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2023-27</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>4</Td>
                        <Td>Raima Majumder</Td>
                        <Td>Hemarun Mukherjee</Td>
                        <Td>8420136171</Td>
                        <Td>smukherjee@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2023-27</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                </tbody>
            </table>
             </>
    )
}


export default studentrecords



