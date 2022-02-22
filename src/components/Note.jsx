import { nanoid } from 'nanoid'
import React from 'react'
import { ReactComponent as Edit }from '../edit.svg'
import { ReactComponent as Delete }from '../delete.svg'
import styled from 'styled-components'
import {Black,Green,Red} from '../style/GlobalStyle'

export const Note = () => {
    const date = new Date()
    const note ={
        title:'Note',
        date: date.toLocaleDateString(),
        description:'Lorem ipsum dolar sit',
        isChange:false,
        id: nanoid()
    }

  return (
    <NoteStyle className='note'>
        <div className="note-head">
            <h2 className="note-title">{note.title}</h2>
            <span className="note-date">{note.date}</span>
        </div>
        <div className="note-content">{note.description}</div>
        <div className="note-footer">
            <button><Edit/></button>
            <button><Delete/></button>
        </div>
    </NoteStyle>
  )
}

const NoteStyle = styled.div`
width:350px;
border-radius: 16px;
background: rgba(255,255,255,0.3);
backdrop-filter: blur(10px);
padding: 20px;
box-shadow: inset 1px 1px 1px rgba(255,255,255,0.3),
inset -1px -1px 1px rgba(0,0,0,0.2),
0 4px 4px rgba(0,0,0,0.2);

.note{
    &-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${Black};
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    &-title{
        font-size: 30px;
        font-weight: normal;
    }
    &-date{
        font-size: 14px;
        color: #fff;
        padding: 4px 5px;
        background: ${Green};
        border-radius: 6px;
    }
    &-content{
        font-size: 18px;
        font-weight: normal;
        color: ${Black};
        min-height: 140px;
        margin-bottom: 20px;
    }
    &-footer{
        display: flex;
        gap: 10px;
        button{
            background: none;
            border: none;
            cursor: pointer;
            path{
                transition: 150ms ease-in-out;
            }
            &:hover{
                path{
                    stroke: ${Green};
                }
            }
        }
        button:last-child{
            &:hover{
                path{
                    stroke: none;
                    fill: ${Red};
                }
            }
        }
    }

}


`