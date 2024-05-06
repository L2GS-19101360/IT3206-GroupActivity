import '../App.css';
import { inputStyle } from '../common/styles';
import { TextField } from '@mui/material';

export default function Header({ search, setSearch, taskList }) {
  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='header'>
      <div style={{ flex: 1 }}>
        <h2>Task List</h2>
      </div>
      <div className='search-bar'>
        <TextField
          label='Search Task'
          variant='filled'
          value={search}
          onChange={setSearch}
          sx={[inputStyle, { minWidth: '500px' }]}
        />
        {/* <Button variant="contained" style={{ backgroundColor: "#015901" }} onClick={() => handleSearch()}>
            Search
          </Button> */}
      </div>
    </div>
  );
}