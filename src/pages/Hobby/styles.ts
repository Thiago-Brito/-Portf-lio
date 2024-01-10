import { styled } from 'styled-components'

export const HobbyContainer = styled.main`
  display: grid;
  width: 30rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  div:first-child{
    display: grid;
    gap:3rem;
  }
  h3{
    color: ${(props) => props.theme.white};

    font-family: Poppins;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3.8rem;
  }
  margin-top: 10rem;
  @media (min-width: 1024px) {
    width:100%;
    padding:0 6rem;
    margin: 0;
  }
`

export const CardHobby = styled.div`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  p{
    color: #B3B3B3;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  }
  

`
export const Cards = styled.div`
  display: grid;
  gap:3rem;
  @media (min-width: 1024px) {
    display: flex;
  }

`



export const AutoFoto = styled.div`
  
  
  
 div{
  
  border-radius: 400px;
  background: linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);
  width: 30rem;
  height: 28rem;
  position:relative;
  img{
    width: 37rem;
    position: absolute;
    bottom: -4rem;
    left: -3rem;
    
  }
 }
`