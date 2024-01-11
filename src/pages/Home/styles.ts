import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  margin-top: 10rem;
  width: 30rem;
  @media (min-width: 1024px) {
    width: 100%;
    margin:0;
  }

  
`

export const IntroText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10.6rem;
  
  width: 30rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    margin:0;
  }
 
`

export const BaseText = styled.div`
  
  margin: 0 auto;
  h3{
    color: ${(props) => props.theme.white};

    font-family: Poppins;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3.8rem;
  }
  p{
    color: #B3B3B3;
    font-family: Poppins;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: justify;
    
  }
  @media (min-width: 1024px) {
    width: 60rem;
    h3{
      font-size: 3rem;
    }
    p{
      font-size: 2.3rem;
    }
    
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
    bottom: -2rem;
    left: -3rem;
    object-fit: cover;
    height: 370px;
  }
 }
`