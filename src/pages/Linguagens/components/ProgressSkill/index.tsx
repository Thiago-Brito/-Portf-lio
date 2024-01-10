import {
  ProgressSkillContainer
} from './styles'

export interface props {
  width: string
 
}
export function ProgressSkill({width} : props) {
  
 
  return (
    <ProgressSkillContainer>
     <div style={{ width }}>

     </div>
     
    </ProgressSkillContainer>
  )
}
