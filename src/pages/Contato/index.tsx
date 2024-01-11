import {
  ContatoContainer,
  Contact,
  GroupContact,
  TextContact
} from './styles'
import Linkedin from '../../assets/linkedin.svg'
import Mail from '../../assets/mail.svg'
import Github from '../../assets/github.svg'
import { useMediaQuery } from "react-responsive";


export function Contato() {
  
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <ContatoContainer>
        <div>
        <h3>Contate-me</h3>
        <GroupContact>
        <a href="https://linkedin.com/in/thiago-brito-1b7a82242" target='_blank'>
        <Contact>
          <div>
            <img src={Linkedin} alt="icon do Linkedin " />
            
          </div>
        <TextContact>
          <p>Thiago Brito</p>
          {isDesktop &&(<><p>https://www.linkedin.com/in/thiago-brito-1b7a82242/</p></>)}
          
          
        </TextContact>
        </Contact>
        </a>
        <a href="https://github.com/Thiago-Brito" target='_blank'>
        <Contact>
          <div>
            <img src={Github} alt="icon do Github" />
            
          </div>
          <TextContact>
          <p>@Thiago-Brito</p>
          {isDesktop &&(<><p>https://github.com/Thiago-Brito</p></>)}
          
          
        </TextContact>
        </Contact>
        </a>
        <a href="mailto:thiago.britomfb@gmail.com" >
        <Contact>
          <div>
            <img src={Mail} alt="icon do Email" />
            
          </div>
        <p>thiago.britomfb@gmail.com</p>
        </Contact>
        </a>
        </GroupContact>
          
        </div>
        
      
     
    </ContatoContainer>
  )
}
