import {
  HobbyContainer,
  CardHobby,
  Cards
} from './styles'
import FotoAcad from '../../assets/fotoAcad.png'
import FotoAmigos from '../../assets/fotoAmigos.png'
import FotoFamilia from '../../assets/fotoFamilia.png'
import FotoProgamar from '../../assets/fotoProgamar.png'


export function Hobby() {
  

  return (
    <HobbyContainer>
      
        <div>
          
      <h3>O que gosto de fazer?</h3>
          
          <Cards>
            <CardHobby>
              <img src={FotoAcad} alt="" />
              <p>Academia</p>
            </CardHobby>
            <CardHobby>
              <img src={FotoAmigos} alt="" />
              <p>Sair com os amigos</p>
            </CardHobby>
            <CardHobby>
              <img src={FotoFamilia} alt="" />
              <p>Sair com a família</p>
            </CardHobby>
            <CardHobby>
              <img src={FotoProgamar} alt="" />
              <p>Programar</p>
            </CardHobby>
          </Cards>
          </div>
      
     
    </HobbyContainer>
  )
}
