
import logo from './logo.svg';
import './App.css';
import Tasks from './pages/MainPage';

import './App.css';
import NavigationBar from './Components/Navbar'
import { DataGrid } from '@mui/x-data-grid';



function App() {
  return (

    <div className="App">

      <Tasks />
    </div>
  );

    <>
      <NavigationBar />
      <div className='main-container'>

      </div>
    </>
  )

}

export default App;

