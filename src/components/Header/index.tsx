import { HeaderContainer } from './styles'


import { NavLink } from 'react-router-dom'




export function Header() {
  


  return (
    <HeaderContainer>

        <NavLink to=""  >
          <h1>Thiago Brito</h1>
        </NavLink>
          <nav>
            <NavLink  to="/Hobby" >
              <h2>Hobby</h2>
            </NavLink>
            <NavLink  to="/linguagens" >
              <h2>Linguagens</h2>
            </NavLink>
            <NavLink  to="/contato" >
              <h2>Contacte-me</h2>
            </NavLink>
          </nav>
        
        
      
    </HeaderContainer>
  )
}
