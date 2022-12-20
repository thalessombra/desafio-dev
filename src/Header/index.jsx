import { Container, Row, Text, RowIcon} from './styles'
import { MdHome, MdKeyboardArrowRight, MdOutlineSettings, MdNotificationsNone} from "react-icons/md";
import React from 'react'
import { Input } from '../Input';



const Header = ()  =>{
  return (<>
    <Container>
    <RowIcon>
      <Row>      
      <Input   leftIcon={<MdHome/>}   placeholder="Inicio" />
      <Input leftIcon={<MdKeyboardArrowRight/>} placeholder="Perfil" />
      </Row>
      <Input leftIcon={<MdOutlineSettings/>} />
      <Input leftIcon={<MdNotificationsNone/>}  placeholder="Clinica Odontolife"/>
     

      </RowIcon>

      <Row>
      <Text>
Quinta-Feira, 12 de Maio de 2022
     </Text>
     
      </Row>
    
     
  
   
    </Container>
    
    </>
  )
}

export {Header}