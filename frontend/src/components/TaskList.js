import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ActionBar from './ActionBar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import NotifSnackbar from './Snackbar';

const SnackbarEvent = ({ startTask, endTask, task, setSnackbarInfo }) => {
  const handleStartClick = () => {
    startTask(task.id);
    setSnackbarInfo({ open: true, message: `Task "${task.title}" started!`, severity: 'success' });
  };

  const handleEndClick = () => {
    endTask(task.id);
    setSnackbarInfo({ open: true, message: `Task "${task.title}" ended!`, severity: 'error' });
  };

  return (
    <Button
      variant='contained'
      sx={{ minWidth: '200px', fontFamily: 'OCR A Std, monospace' }}
      color={task.status === 'PENDING' ? 'success' : 'error'}
      onClick={task.status === 'PENDING' ? handleStartClick : handleEndClick}
      disabled={task.status === 'COMPLETED'}
    >
      {task.status === 'PENDING' ? 'Start Task' : 'End Task'}
    </Button>
  );
};

export default function TaskList() {
  const [taskArray, setTaskArray] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [search, setSearch] = useState('');
  const [snackbarInfo, setSnackbarInfo] = useState({ open: false, message: '', severity: '' });

  const apiLinks = [
    'https://it3206-groupactivity-api.onrender.com/api/tasks',
    'http://localhost:8080/api/tasks/'
  ]

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiLinks[0]);
      setTaskArray(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [rerender]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredTasks = taskArray.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTask = (taskId) => {
    const apiLinks = [
      `https://it3206-groupactivity-api.onrender.com/api/tasks/${taskId}`,
      `http://localhost:8080/api/tasks/${taskId}`
    ]

    axios
      .delete(apiLinks[0])
      .then((response) => {
        console.log(response);
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startTask = (taskId) => {
    const apiLinks = [
      `https://it3206-groupactivity-api.onrender.com/api/tasks/startTask/${taskId}`,
      `http://localhost:8080/api/tasks/startTask/${taskId}`
    ]

    axios
      .put(apiLinks[0])
      .then((response) => {
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
        setRerender((prev) => !prev);
      });
  };

  const endTask = (taskId) => {
    const apiLinks = [
      `https://it3206-groupactivity-api.onrender.com/api/tasks/finishTask/${taskId}`,
      `http://localhost:8080/api/tasks/finishTask/${taskId}`
    ]

    axios
      .put(apiLinks[0])
      .then((response) => {
        setRerender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarInfo({ ...snackbarInfo, open: false });
  };

  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const columns = [
    {
      field: 'title',
      headerName: 'Task Title',
      minWidth: 400,
      headerAlign: 'left',
      fontWeight: 'bold',
    },
    {
      field: 'description',
      headerName: 'Task Description',
      flex: 1,
      minWidth: 510,
      headerAlign: 'left',
      fontWeight: 'bold',
    },
    {
      field: 'status',
      headerName: 'Task Status',
      minWidth: 400,
      headerAlign: 'center',
      fontWeight: 'bold',
      renderCell: (params) => {
        const task = params.row;
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontFamily: 'OCR A Std, monospace' }}>
            {task.status}
          </div>
        );
      }
    },
    {
      field: 'action',
      headerName: 'Task Action',
      minWidth: 394,
      headerAlign: 'center',
      fontWeight: 'bold',
      renderCell: (params) => {
        const task = params.row;
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <SnackbarEvent
              startTask={startTask}
              endTask={endTask}
              task={task}
              setSnackbarInfo={setSnackbarInfo}
            />
          </div>
        );
      },
    }
  ];

  return (
    <>
      <div className='main-container'>
        <Header search={search} setSearch={handleSearch} taskList={taskArray} />
        <ActionBar setTaskArray={setTaskArray} setRerender={setRerender} setSelectedTaskArray={rowSelectionModel} />
        <Box
          sx={{ height: 500, width: '100%', display: 'flex', marginTop: '10px' }}
        >
          <DataGrid
            rows={filteredTasks}
            columns={columns}
            density='comfortable'
            sx={{
              fontSize: '20px',
              fontFamily: 'OCR A Std, monospace',
              '.MuiDataGrid-columnHeader': {
                fontWeight: 'bold',
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
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
          />
        </Box>
        <NotifSnackbar
          snackbarInfo={snackbarInfo}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      </div>
    </>
  );
}