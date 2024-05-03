import "../App.css";
import Logo from '../common/img/smiski_logo.png'
import Button from '@mui/material/Button';

export default function NavigationBar() {
  const navItemStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'OCR A Std, monospace',
    color: '#015901'
  }
  return (
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
          <Button variant='text' sx={navItemStyle}>Members</Button>
        </div>    
      </nav>
  );
}
