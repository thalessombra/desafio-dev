import { Container, Row,Wrapper,Menu, MenuRight,TextInput,FirstTextInput,Paragraph } from './styles'
import { MdHome, MdKeyboardArrowRight, MdOutlineSettings, MdNotificationsNone} from "react-icons/md";
import React from 'react'
import { Input } from '../Input';




const Header = ()  =>{
  return (
    
    <Wrapper>
      <Container>
      <Row> 
          <Menu>
          <Input   leftIcon={<MdHome/>}  />
          <Input leftIcon={<MdKeyboardArrowRight/>} />
          <FirstTextInput>Inicio</FirstTextInput>
         
      <Input leftIcon={<MdKeyboardArrowRight/>} />
     <TextInput>Perfil</TextInput>
      </Menu>
     <Paragraph>Quinta-Feira, 12 de Maio de 2022</Paragraph>
      
      </Row>
   

      

      <Row>
        <MenuRight>
        <Input leftIcon={<MdOutlineSettings/>} />
      </MenuRight>
      <MenuRight>
      <Input leftIcon={<MdNotificationsNone/>}  placeholder="Clinica Odontolife"/>
      </MenuRight>
     

      </Row>
    
     
   
    </Container>
    
    </Wrapper>
     
   
  )
}

export {Header}