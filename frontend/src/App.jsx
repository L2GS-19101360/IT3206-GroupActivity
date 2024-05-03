
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/Home"
import AddTask from "./Components/AddTask"
import DeleteTask from "./Components/DeleteTask"
import ViewTask from "./Components/ViewTask"
import UpdateTask from "./Components/UpdateTask"

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Add Task" element={<AddTask />} />
          <Route path="Delete Task" element={<DeleteTask />} />
          <Route path="View Task" element={<ViewTask />} />
          <Route path="Update Task" element={<UpdateTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
