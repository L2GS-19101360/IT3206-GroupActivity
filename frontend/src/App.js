
import logo from './logo.svg';
import './App.css';
import Tasks from './pages/MainPage';

import './App.css';
import NavigationBar from './components/Navbar'
import { DataGrid } from '@mui/x-data-grid';



function App() {
  return (

    <div className="App">
  <NavigationBar />
      <Tasks />
    </div>
  );

 
}

export default App;

