import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 32px;

position: absolute;
width: 109px;
height: 37px;
left: 1779px;
top: 276px;

background: #01A7CC;
border: 1px solid #01A7CC;
border-radius: 4px;
color: #FFFF;


${({variant}) => variant  !== "primary" && css`
height: 33px;

background: #01A7CC;

&:hover{
   opacity: 0.6;
   cursor: pointer;
}

`}

`