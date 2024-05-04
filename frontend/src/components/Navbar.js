import '../App.css';
import { useState } from 'react';
import Logo from '../common/img/smiski_logo.png';
import Button from '@mui/joy/Button';
import { Sheet } from '@mui/joy';
import ModalClose from '@mui/joy/ModalClose';
import Modal from '@mui/joy/Modal';

export default function NavigationBar() {
  const [membersModal, showMembersModal] = useState(false);
  const handleOpen = () => {
    showMembersModal(true);
  };
  const handleClose = () => {
    showMembersModal(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <div style={{ paddingRight: 20 }}>
            <img src={Logo} alt='smiski-logo' className='logo' />
          </div>
          <div>
            <h3>Group 1 Task Management System</h3>
          </div>
        </div>
        <div className='navbar-right'>
          <Button variant='text' sx={navItemStyle} onClick={handleOpen}>
            Members
          </Button>
        </div>
      </nav>
      {/* Members Modal */}
      <MembersModal open={membersModal} close={handleClose} />
    </>
  );
}

function MembersModal({ open, close }) {
  return (
    <Modal sx={modalStyle} open={open} onClose={close}>
      <Sheet sx={contentStyle}>
        <ModalClose variant='plain' sx={{ m: 1.2 }} />
        <div className='modal-header'>
          <h2>Group 1 Members</h2>
        </div>
        <div className='modal-content'>
          <text>Aliser, Francis Louis</text>
          <text>Caballes, Ian Lemuel</text>
          <text>Ng, James Winston</text>
          <text>Oblina, Nicholai Julian</text>
          <text>Silverio, Gerald</text>
          <text>Suico, Lorenz Gil</text>
          <text>Dano, Allen Louie</text>
          <text>Noob, Clyde Joseph</text>
        </div>
      </Sheet>
    </Modal>
  );
}

const navItemStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'OCR A Std, monospace',
  color: '#015901',
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentStyle = {
  minWidth: 400,
  borderRadius: 'md',
  p: 3,
  boxShadow: 'lg',
};
