import { styled } from 'styled-components'

export const LinguagensContainer = styled.main`
  display: grid;
  width: 30rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap:8rem;
  
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:0;
  }

  
`


export const LinguagensSection = styled.section`
 flex: 1;
`

export const Type = styled.div`
  display: grid;
  height: 282px;
  
 
`
export const Code = styled.div`
  display: flex;
 
  gap:2px;
  img{
    filter:grayscale(100%);
    width: 36px;
    height: 35px;
    object-fit: cover;
  
  }
`
export const ProjetosSection = styled.section`
width: 30rem;
 .swiper-slide img {
  width: 250px;
}
.swiper-slide{
  width: 230px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: white;
}

/* Estilo para a cor inativa do paginador */
.swiper-pagination .swiper-pagination-bullet {
  background-color: white;
}
@media (min-width: 1024px) {
  
  width: 50rem;
  .swiper-slide img {
    width: 350px;
  }
  .swiper-slide{
    width: 390px;
  }
}
  
`