import React from 'react'
import styled from 'styled-components'
import { BsBookmarkCheck } from 'react-icons/bs'
import { FcCancel } from'react-icons/fc'
import { Black, Green, Red } from '../style/GlobalStyle'

export const Modal = ({setIsOpenModal}) => {
  return (
    <ModalStyle>

        <div className="modal-body">
            <h2 className="modal-title">Add Your Note Here...</h2>
            <input type="text" className="modal-input" placeholder='Note Title here...'/>
            <textarea className="modal-desc" placeholder='Note Description here...'></textarea>
            <div className="modal-btns">
                <button>
                    <BsBookmarkCheck/>
                    SAVE
                </button>
                <button onClick={() => setIsOpenModal(false)}>
                    <FcCancel/>
                    CANCEL
                </button>
            </div>
        </div>

    </ModalStyle>
  )
}

const ModalStyle = styled.div`
position: fixed;
top: 0;
width: 100%;
height: 100vh;
z-index: 999;
background: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(10px);
.modal{
    &-body{
        width: 480px;
        padding: 30px;
        background: rgba(255,255,255, 0.5);
        border-radius: 16px;
        box-shadow: inset 1px 1px 1px rgba(255,255,255, 0.18), inset -1px -1px -1px rgba(0,0,0,0.18),0 4px 4px rgba(0,0,0,0.2);
    }
    &-title{
        font-size: 25px;
        color: ${Black};
        font-weight: 600;
    }
    &-input{
        width: 100%;
        padding: 15px;
        border: none;
        outline: none;
        border-radius: 16px;
        font-size: 18px;
        color: rgba(#031323,30);
        background: rgba(255,255,255,0.7);
        margin: 15px 0 27px 0;
    }
    &-desc{
        width: 100%;
        min-height: 175px;
        resize: none;
        border-radius: 16px;
        background: rgba(255,255,255,0.7);
        border: none;
        outline: none;
        font-size: 18px;
        color: rgba(#031323,30);
        padding: 15px;
        margin-bottom:30px;
    }
    &-btns{
        display: flex;
        gap: 5px;
        button{
            min-width: 110px;
            background: ${Green};
            color: #fff;
            border-radius: 6px;
            border: none;
            padding: 4px;
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 7px;
            &:last-child{
            background: ${Red};
            path{
                fill: #fff;
            }
        }
        }
        &:last-child{
            
            path{
                fill: #fff;
            }
        }
    }

}
`