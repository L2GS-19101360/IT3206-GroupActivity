import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';

import TableRow from '@mui/material/TableRow';


export default function Tasks(){

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

    const dummyData = [
        {title: 'Integ Prog Finals', desc: 'Make Final project', status: 'Ongoing'},
        {title: 'SQA Finals', desc: 'Make Final project', status: 'Pending'},
        {title: 'Capstone Defense', desc: 'Finalize ppt and practice for defense', status: 'Ongoing'},
        {title: 'PE Finals', desc: 'Sportsfest on May 19', status: 'Pending'},
        {title: 'Arts Project', desc: 'Make art booklet', status: 'Ongoing'}
    ]

    return(
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
                        {dummyData.map((row) => (
                            <TableRow>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell><Button variant='contained'>Info</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}