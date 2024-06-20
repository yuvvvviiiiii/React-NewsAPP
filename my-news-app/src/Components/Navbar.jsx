

const Navbar = ({setCategory}, {category}) => {

    // function to set faviourites
    const navigateToSaved = () => {
      setCategory('saved');
    }
    
    // function to hanlde search 
    const handleSearch = (event) => {
      event.preventDefault();
      console.log(category);
    }

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" type="submit" onClick={() => setCategory("general")}><span className="badge bg-dark text-light fs-5">NewsApp</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*using SetCategory to identify the category and display the keyword related to the category */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={() => setCategory("technology")}>Technology</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={() => setCategory("health")}>Health</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={() => setCategory("entertainment")}>Entertainment</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={() => setCategory("business")}>Business</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={() => setCategory("sports")}>Sports</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" type="submit" onClick={navigateToSaved}>
                Saved Articles
              </a>
              </li>
              
            </ul>

            <form className="d-flex" role="search"  onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Enter Category" aria-label="Search" value={category} onChange={(e) => setCategory(e.target.value)}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
      </div>


      </nav>
    )
}

export default Navbar
