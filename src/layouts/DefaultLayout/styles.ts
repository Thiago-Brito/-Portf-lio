import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  min-height: 100vh;
  width: 30rem;
  main {
  flex: 1; 
}

footer {
  
  text-align: center;
}

@media (min-width: 1024px) {
    width:100%;
    
  }
`


