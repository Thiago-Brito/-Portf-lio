import { styled } from 'styled-components'

export const ProgressSkillContainer = styled.div`
  width: 250px;
  height: 28px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.19);
  div{
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.19);

    background: linear-gradient(90deg, #777CF4 0%, #F47777 134.74%);
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 299px;
  }
`

