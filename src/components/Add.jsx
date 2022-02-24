import React from 'react'
import styled from 'styled-components'
import {Red} from '../style/GlobalStyle'

export const Add = ({setIsOpenModal}) => {
  return (
    <AddStyle onClick={() => setIsOpenModal(true)}>
        <button>+</button>
    </AddStyle>
  )
}
const AddStyle = styled.button`
button{
    position:fixed;
    bottom: 30px;
    right: 30px;
    width: 58px;
    aspect-ratio: 1 / 1;
    background: none;
    background: ${Red};
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 40px;
    transition: 200ms ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
}

`
