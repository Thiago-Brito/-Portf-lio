import { styled } from 'styled-components'

export const HeaderContainer = styled.header`

  width: 100%; 
  width: 30rem;
  margin: 0 auto;
  display: flex;
  align-items: center; 
  flex-direction: column;
  margin-top: 2rem;
  


  nav {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    }

  a{
    text-decoration: none;
  }
  h1{
    color: ${(props) => props.theme.white};
    text-align: center;
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 3.2rem;

    
  }
  h2{
    color: ${(props) => props.theme.white};

    text-align: center;
    font-family: Poppins;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: transform 0.2s ease;
  }
  h2:hover{
    color: ${(props) => props.theme['hover-text']};
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    display:flex;
    width: 100%;
    justify-content: space-between;
    padding:0 6rem;
    nav {
      gap: 8rem;
      width: auto;
     
    }
    h1{
      white-space: nowrap;
    }
  }
   
`






