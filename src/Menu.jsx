import { NavLink } from "react-router-dom";
function Menu(){
    return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">    
    <NavLink to="/" className="navbar-brand" href="#">Daniel</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">          
          <NavLink to="/" className="nav-link active" aria-current="page">Página Inicial</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plano de Ensino
          </a>
          <ul className="dropdown-menu">
            <li>            
                <NavLink className="dropdown-item" to="/lpbd">Lpbd</NavLink>
            </li>
            <li>            
                <NavLink className="dropdown-item" to="/redes">Redes</NavLink>
            </li>
            <li>            
                <NavLink className="dropdown-item" to="/relatorios">Relatorios</NavLink>
            </li>
            <li>            
                <NavLink className="dropdown-item" to="/media">Calculadora</NavLink>
            </li>                        
          </ul>
        </li>
        <li className="nav-item">          
          <NavLink className="nav-link" to="/sobre">Ementa e Calculadora</NavLink>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
    )
}
export default Menu;