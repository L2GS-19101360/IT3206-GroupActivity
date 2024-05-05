import React from "react";
import { TextField, Button } from "@mui/material";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState(""); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredTasks = taskArray.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className="search-bar">
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="contained" style={{ backgroundColor: "#015901" }} onClick={() => handleSearch()}>
        Search
      </Button>
    </div>
  );
}