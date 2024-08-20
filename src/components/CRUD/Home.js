import { Link, Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CRUD
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Professor
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="professores/listar">
                      Listar Professor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="professores/criar">
                      Criar Professor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aluno
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="alunos/listar">
                      Listar Aluno
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;

/*<h1>Home</h1>
<Link to="/professores/criar" style={{margin:"10px"}}>Criar</Link>
<Link to="/professores/editar" style={{margin:"10px"}}>Editar</Link>
<Link to="/professores/listar" style={{margin:"10px"}}>Listar</Link>
<hr />
<Outlet />*/