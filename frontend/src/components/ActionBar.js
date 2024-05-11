import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { mdlContentStyle, mdlBtnStyle, inputStyle } from '../common/styles';
import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import ModalDialog from '@mui/joy/ModalDialog';
import { Divider, Button } from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAddCircleOutline } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';

export default function ActionBar({ selected, setRerender, handleSelectTasks, setSelectedTaskArray }) {
  const [inputModal, showInputModal] = useState(false);

  const handleUpdateTask = () => {
    console.log(setSelectedTaskArray)
  }

  const handleDeleteTask = () => {
    console.log(setSelectedTaskArray)

    const data = {
      taskIds: setSelectedTaskArray
    }

    axios.post(
      'http://localhost:8080/api/tasks/deleteMultipleTasks', data
    ).then(
      (response) => {
        setRerender((prev) => !prev);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <>
      <div className='action-bar'>
        <div className='action-button'>
          <Button
            variant='text'
            sx={actionButtonStyle}
            onClick={() => showInputModal(true)}
            startIcon={
              <MdAddCircleOutline
                style={{ paddingLeft: '2px', paddingRight: '2px' }}
              />
            }
          >
            Add new task
          </Button>
        </div>
        <div className='action-button'>
          <Button
            variant='text'
            sx={actionButtonStyle}
            disabled={setSelectedTaskArray.length === 0 || setSelectedTaskArray.length > 1}
            onClick={() => handleUpdateTask()}
            startIcon={
              <FiEdit3 style={{ paddingLeft: '2px', paddingRight: '2px' }} />
            }
          >
            Edit the task
          </Button>
        </div>
        <div className='action-button'>
          <Button
            variant='text'
            sx={actionButtonStyle}
            disabled={setSelectedTaskArray.length === 0}
            onClick={() => handleDeleteTask()}
            startIcon={
              <RiDeleteBinLine
                style={{ paddingLeft: '2px', paddingRight: '2px' }}
              />
            }
          >
            Delete the task(s)
          </Button>
        </div>
      </div>
      <Divider
        variant='fullWidth'
        sx={{ opacity: '1', paddingVertical: '4px', marginBottom: '6px' }}
      />
      {/* Input Modal */}
      <InputModal open={inputModal} close={() => showInputModal(false)} setRerender={setRerender} />
    </>
  );
}

function InputModal({ open, close, setRerender }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!open) {
      setTitle('');
      setDescription('');
    }
  }, [open])

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/tasks', {
        title: title,
        description: description
      });
      setTitle('');
      setDescription('');
      console.log('Task created successfully');
      setRerender(prev => !prev);
      close();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  return (
    <Modal open={open} onClose={close}>
      <ModalDialog sx={mdlContentStyle}>
        <ModalClose variant='plain' sx={{ m: 1.2 }} onClick={close} />
        <div className='modal-header'>
          <h2>Add a new task</h2>
        </div>
        <div className='modal-content'>
          <text>Fill out the necessary details for this task.</text>
        </div>
        <Stack spacing={3} mt={1}>
          <TextField
            label='Task Name'
            variant='filled'
            value={title}
            sx={inputStyle}
            onChange={(newTitle) => setTitle(newTitle.target.value)}
            required
          />
          <TextField
            label='Task Description'
            variant='filled'
            value={description}
            sx={inputStyle}
            onChange={(newDesc) => setDescription(newDesc.target.value)}
            required
          />
          <Button variant='contained' onClick={handleSubmit} sx={mdlBtnStyle}>
            Submit
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
}

const actionButtonStyle = {
  pl: '20px',
  pr: '20px',
  color: '#015901',
  fontSize: '16px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'rgb(119, 221, 119, 0.4)',
    transition: '0s',
  },
};