

const Navbar = ({setCategory}) => {

 
return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" >
<div className="container-fluid">
  <a className="navbar-brand" href="#"><span className="badge bg-dark text-light fs-5">NewsApp</span></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" type="submit" onClick={() => setCategory("technology")}>Technology</a>
      </li>
      <li className="nav-item">
        <div className="nav-link active" type="submit" onClick={() => setCategory("health")}>Health</div>
      </li>
      <li className="nav-item">
        <div className="nav-link active" type="submit" onClick={() => setCategory("entertainment")}>Entertainment</div>
      </li>
      <li className="nav-item">
        <div className="nav-link active" type="submit" onClick={() => setCategory("business")}>Business</div>
      </li>
      <li className="nav-item">
        <div className="nav-link active" type="submit" onClick={() => setCategory("sports")}>Sports</div>
      </li>
      
      
        
      
    </ul>
    <form className="d-flex" role="search" >
      <input className="form-control me-2" type="search" placeholder="Enter Category" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
)
}

export default Navbar
