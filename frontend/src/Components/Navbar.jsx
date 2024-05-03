
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navbar() {


    return (
        <>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor: "rgb(17, 135, 172)",fontWeight:"bold"}}>

  <div class="container-fluid">
    <a class="navbar-brand" href="/">SANGKARLOS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="AddTask">Add Task</a>
        
        </li>
        <li class="nav-item">
        <a class="nav-link " aria-current="page" href="ViewTask">View Tasks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="UpdateTask">Update Tasks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="DeleteTask">Delete Tasks</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}