import {
  LinguagensContainer,
  LinguagensSection,
  Type,
  Code,
  ProjetosSection
} from './styles'
import JavaSVG from '../../assets/java.svg'
import Python from '../../assets/python.png'
import TS from '../../assets/ts.svg'
import NodeJS from '../../assets/nodejs.svg'
import React from '../../assets/react.svg'
import JS from '../../assets/js.svg'
import Projeto from '../../assets/projeto.png'
import Projeto2 from '../../assets/projeto2.png'
import Projeto3 from '../../assets/projeto3.png'




import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import { ProgressSkill } from './components/ProgressSkill'

export function Linguagens() {
  
const data=[
  {id:'3', image: Projeto3},
  {id:'2', image: Projeto2},
  {id:'1', image: Projeto},
  
]
  return (
    <LinguagensContainer>
      <LinguagensSection>
        <h3>Linguagens</h3>
        <Type>
          <Code>
          <img src={JavaSVG} alt="" />
          <ProgressSkill width= '40%'/>
          </Code>
          
          <Code>
          <img src={NodeJS  } alt="" />
          <ProgressSkill width= '50%'/>
          </Code>
          <Code>
          <img src={Python  } alt="" style={{ width: '36px', height: '34px' }}/>
          <ProgressSkill width= '60%'/>
          </Code>
          <Code>
          <img src={TS } alt="" />
          <ProgressSkill width= '75%'/>
          </Code>
          
          <Code>
          <img src={React  } alt="" />
          <ProgressSkill width= '75%'/>
          </Code>
          <Code>
          <img src={JS} alt=""  />
          <ProgressSkill width= '80%'/>
          </Code>
        </Type>
      </LinguagensSection>
      <ProjetosSection>
        <h3>Projetos</h3>
        <Swiper  effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
      </ProjetosSection>
    </LinguagensContainer>
  )
}
