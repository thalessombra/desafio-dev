import React from "react";

import { IconContainer,InputText, InputContainer } from "./styles";

const Input = ({leftIcon, ...rest}) => {
  return (
   <InputContainer>
   {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
   <InputText {...rest}/>
   </InputContainer>
  )
}
export {Input};