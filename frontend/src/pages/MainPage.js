import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import axios from 'axios'
import TableRow from '@mui/material/TableRow';


export default function Tasks() {

    const [taskArray, settaskArray] = useState([]);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tasks/');
                settaskArray(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTask();
    }, []);

    console.log(taskArray)

    const columns = [
        {
            id: 'title',
            label: 'Title',
        },
        {
            id: 'description',
            label: 'Description',
        },
        {
            id: 'progress',
            label: 'Progress'
        },
        {
            id: 'action',
            label: 'Actions'

        }
    ];

    return (
        <>

            <button>Create Contact</button>
            <form className="example" action="/action_page.php">
                <input type="text" placeholder="Enter Contact" name="search"></input>
                <button type="submit">Hello</button>
            </form>

            <TableContainer sx={{ padding: 10 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskArray.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell style={{ maxWidth: "50px" }}>{task.title}</TableCell>
                                <TableCell style={{ wordWrap: "break-word", wordBreak: "break-word", maxWidth: "150px" }}>{task.description}</TableCell>
                                <TableCell style={{ wordWrap: "break-word", wordBreak: "break-word", maxWidth: "1px" }}>{task.status}</TableCell>
                                <TableCell style={{ maxWidth: "10px" }}><Button variant='contained'>Info</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}