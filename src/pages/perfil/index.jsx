
import {MdKeyboardBackspace} from 'react-icons/md'
import { Page,Tabs,TextInput,Container,Info,Paragraph } from "./styles";

import React from 'react'
import { Input } from "../../Input";
import { Button } from '../../Button';


const Profile = () => {
  return (<>
    <Page> 
        <Input leftIcon={<MdKeyboardBackspace />} placeholder=" Configurações do perfil"/>
       
    </Page>
    
    <Tabs>
        <TextInput> Dados gerais 
            
        </TextInput>
        <TextInput>Endereço</TextInput>
       <TextInput>Senha</TextInput>
       <TextInput>Dados profissionais</TextInput>
    
       <Container>
      <Info>Informações pessoais</Info>
      <Paragraph>Atualize sua foto e dados pessoais aqui.</Paragraph>
      
      <Button tittle="Salvar" variant="secondary"></Button>
    </Container>
    
    </Tabs>
   
   
    
    </>
  )
}
export{ Profile}