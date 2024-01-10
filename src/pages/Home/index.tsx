import {
  HomeContainer,
  IntroText,
  BaseText,
  AutoFoto
} from './styles'
import Foto from '../../assets/foto.png'

export function Home() {
  

  return (
    <HomeContainer>
      <IntroText>
        
          <BaseText>
          <h3>Oi, meu nome é Thiago 👋</h3>
          <p>
          Sou um estudante de Ciência da computação da UFRPE, atualmente focado em estudar desenvolvimento web, principalmente FrontEnd com React, Mas aberto a aprender novas tecnologias
          </p>
          </BaseText>
          <AutoFoto>
            <div><img src={Foto} alt="" /></div>
            
          </AutoFoto>
        
      </IntroText>
     
    </HomeContainer>
  )
}
