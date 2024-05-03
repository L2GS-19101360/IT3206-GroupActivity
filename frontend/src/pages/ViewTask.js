import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import axios from 'axios'
import TableRow from '@mui/material/TableRow';


export default function ViewTask() {

    const [taskArray, setTaskArray] = useState([]);

    const fetchTask = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/tasks/');
            setTaskArray(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    const deleteTask = (taskId) => {
        axios.delete(
            `http://localhost:8080/api/tasks/${taskId}`
        ).then(
            (response) => {
                console.log(response);
                fetchTask();
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    const startTask = (taskId) => {
        axios.put(
            `http://localhost:8080/api/tasks/startTask/${taskId}`
        ).then(
            (response) => {
                fetchTask();
            }
        ).catch(
            (error) => {
                console.log(error)
                fetchTask();
            }
        );
    }

    const endTask = (taskId) => {
        axios.put(
            `http://localhost:8080/api/tasks/finishTask/${taskId}`
        ).then(
            (response) => {
                fetchTask();
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        );
    }

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

        },
        {
            id: 'update',
            label: 'Update'
        },
        {
            id: 'delete',
            label: 'Delete'
        }
    ];

    return (
        <>

        

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
                                <TableCell style={{ maxWidth: "10px" }}>
                                    {task.status === "PENDING" ? (
                                        <Button variant='contained' color='success' onClick={() => startTask(task.id)}>Start Task</Button>
                                    ) : task.status === "ONGOING" ? (
                                        <Button variant='contained' color='error' onClick={() => endTask(task.id)}>End Task</Button>
                                    ) : (
                                        <Button variant="contained" disabled>Completed</Button>
                                    )}
                                </TableCell>
                                <TableCell style={{ maxWidth: "10px" }}>
                                    <Button variant="contained" style={{ backgroundColor: 'orange', color: 'white' }}>Update Task</Button>
                                </TableCell>
                                <TableCell style={{ maxWidth: "10px" }} onClick={() => deleteTask(task.id)}><Button variant='contained' color='error'>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}