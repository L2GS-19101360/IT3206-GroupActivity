import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ActionBar from './ActionBar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function TaskList() {
  const [taskArray, setTaskArray] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rerender, setRerender] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks/');
      setTaskArray(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [rerender]);

  return (
    <>
      <div className='main-container'>
        <Header />
        <ActionBar setTaskArray={setTaskArray} setRerender={setRerender} />
        <TaskTable
          tasks={taskArray}
          selected={selected}
          setSelected={setSelected}
          setRerender={setRerender}
        />
      </div>
    </>
  );
}

function TaskTable({ tasks, selected, setSelected, setRerender }) {
  const columns = [
    {
      field: 'title',
      headerName: 'Task Name',
      minWidth: 400,
      headerAlign: 'left',
      fontWeight: 'bold',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      headerAlign: 'center',
      fontWeight: 'bold',
    },
    {
      field: 'progress',
      headerName: 'Progress',
      minWidth: 400,
      headerAlign: 'right',
      fontWeight: 'bold',
    },
  ];

  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:8080/api/tasks/${taskId}`)
      .then((response) => {
        console.log(response);
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startTask = (taskId) => {
    axios
      .put(`http://localhost:8080/api/tasks/startTask/${taskId}`)
      .then((response) => {
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
        setRerender((prev) => !prev);
      });
  };

  const endTask = (taskId) => {
    axios
      .put(`http://localhost:8080/api/tasks/finishTask/${taskId}`)
      .then((response) => {
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{ height: 400, width: '100%', display: 'flex', marginTop: '10px' }}
    >
      <DataGrid
        rows={tasks}
        columns={columns}
        density='comfortable'
        sx={{
          fontSize: '18px',
          fontFamily: 'OCR A Std, monospace',
          '.MuiDataGrid-columnHeader': {
            backgroundColor: '#77DD77',
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
