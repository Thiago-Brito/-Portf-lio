import { HeaderContainer } from './styles'



import { NavLink,useLocation } from 'react-router-dom'




export function Header() {
  const location = useLocation();
  

  return (
    <HeaderContainer>

        <NavLink to=""  >
          <h1>Thiago Brito</h1>
        </NavLink>
          <nav>
          <NavLink to="/Hobby">
            <h2 style={{ color: location.pathname === '/Hobby' ? '#777CF4' : '' }}>Hobby</h2>
          </NavLink>
            <NavLink  to="/linguagens" >
              <h2 style={{ color: location.pathname === '/linguagens' ? '#777CF4' : '' }}>Linguagens</h2>
            </NavLink>
            <NavLink  to="/contato" >
              <h2  style={{ color: location.pathname === '/contato' ? '#777CF4' : '' }}>Contacte-me</h2>
            </NavLink>
          </nav>
        
        
      
    </HeaderContainer>
  )
}
