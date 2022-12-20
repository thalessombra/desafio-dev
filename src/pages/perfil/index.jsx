
import {MdKeyboardBackspace} from 'react-icons/md'
import { Page,Tabs,TextInput } from "./styles";

import React from 'react'
import { Input } from "../../Input";

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
    
    </Tabs>
    

    
    
    </>
  )
}
export{ Profile}