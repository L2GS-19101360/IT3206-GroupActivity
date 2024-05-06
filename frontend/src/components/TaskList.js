import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ActionBar from './ActionBar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function TaskList() {
  const [taskArray, setTaskArray] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [search, setSearch] = useState('');

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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredTasks = taskArray.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='main-container'>
        <Header search={search} setSearch={handleSearch} taskList={taskArray} />
        <ActionBar setTaskArray={setTaskArray} setRerender={setRerender} />
        <TaskTable
          tasks={filteredTasks}
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
            {task.status === 'PENDING' ? (
              <Button
                variant='contained'
                sx={{ minWidth: '200px', fontFamily: 'OCR A Std, monospace' }}
                color='success'
                onClick={() => startTask(task.id)}
              >
                Start Task
              </Button>
            ) : task.status === 'ONGOING' ? (
              <Button
                variant='contained'
                sx={{ minWidth: '200px', fontFamily: 'OCR A Std, monospace' }}
                color='error'
                onClick={() => endTask(task.id)}
              >
                End Task
              </Button>
            ) : (
              <Button variant='contained' sx={{ minWidth: '200px', fontFamily: 'OCR A Std, monospace' }} disabled>
                Completed
              </Button>
            )}
          </div>
        );
      },
    }

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
      sx={{ height: 500, width: '100%', display: 'flex', marginTop: '10px' }}
    >
      <DataGrid
        rows={tasks}
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
      />
    </Box>
  );
}
