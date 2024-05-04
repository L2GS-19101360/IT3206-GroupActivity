import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import ModalDialog from '@mui/joy/ModalDialog';
import { Divider, Button } from '@mui/material';
import { MdAddCircleOutline } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';

export default function ActionBar({ selected }) {
  const [inputModal, showInputModal] = useState(false);

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
      <InputModal open={inputModal} close={() => showInputModal(false)} />
    </>
  );
}

function InputModal({ open, close }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
        await axios.post('http://localhost:8080/api/tasks', {
            title: title,
            description: description
        });
        setTitle('');
        setDescription('');
        console.log('Task created successfully');
        window.location.reload();
    } catch (error) {
        console.error('Error creating task:', error);
    }
  }

  return (
    <Modal open={open} onClose={close}>
      <ModalDialog sx={contentStyle}>
        <ModalClose variant='plain' sx={{ m: 1.2 }} />
        <div className='modal-header'>
          <h2>Add a new task</h2>
        </div>
        <div className='modal-content'>
          <text>Fill out the necessary details for this task.</text>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <Stack spacing={3} mt={1}>
            <TextField
              label='Task Name'
              variant='outlined'
              value={title}
              onChange={(newTitle) => setTitle(newTitle.target.value)}
              required
            />
            <TextField
              label='Task Description'
              variant='outlined'
              value={description}
              onChange={(newDesc) => setDescription(newDesc.target.value)}
              required
            />
            <Button variant='contained' type='submit' onClick={handleSubmit} sx={modalButtonStyle}>
              Submit
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}

const actionButtonStyle = {
  pl: '20px',
  pr: '20px',
  color: '#015901',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'rgb(119, 221, 119, 0.4)',
    transition: '0s',
  },
};

const modalButtonStyle = {
  padding: '6px',
  fontFamily: 'OCR A Std, monospace',
  letterSpacing: '1.5px',
  backgroundColor: 'rgb(119, 221, 119)',
  color: '#015901',
  fontSize: '22px',
  fontWeight: 'bolder',
  '&:hover': {
    backgroundColor: 'rgb(119, 221, 119, 0.8)',
  }
};

const contentStyle = {
  minWidth: 400,
  borderRadius: 'md',
  p: 3,
  boxShadow: 'lg',
};
