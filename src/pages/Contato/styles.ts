import { styled } from 'styled-components'

export const ContatoContainer = styled.main`
  display: grid;
  width: 30rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  
  h3{
    color: ${(props) => props.theme.white};

    font-family: Poppins;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3.8rem;
  }
 
  a{
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    width:100%;
    padding:0 6rem;
  }
`

export const Contact = styled.div`
  cursor: pointer;
  div:first-child{
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 1px solid #FFF;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  align-items: center;
  gap:13px;
  p{
    color: #B3B3B3;

    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`


export const GroupContact = styled.div`
  display: grid;
  gap:10rem;
  a{
    transition: transform 0.2s ease;
  }
  a:hover{
    p{
      color: ${(props) => props.theme['hover-text']};
      transform: scale(1.02);
    }
    
  }
`
export const TextContact = styled.div`
  display: grid;
  
`
