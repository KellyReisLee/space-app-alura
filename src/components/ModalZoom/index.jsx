import React from 'react'
import Image from '../Image/index'
import styled from 'styled-components'
import { IoClose } from "react-icons/io5";

const Dialog = styled.dialog`
background-color: #021d3f;
padding: 0;
border: 3px solid #02316d;
border-radius: 10px;
position: absolute;
top: 294px;
width: 60%;
z-index: 10;

`

const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
`
const Form = styled.form`
position: absolute;
top: 0;
right: 0;
background-color: transparent;
`
const Button = styled.button`
background-color: transparent;
border: none;
color: aliceblue;
padding: 0.8rem;
cursor: pointer;
`

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {/* Transformando um objeto em True or False. Negando duas vezes. */}
      {
        foto && <Overlay />
      }
      {
        foto && <Dialog open={!!foto} onClose={aoFechar}>
          <Image foto={foto} />
          <Form method="dialog">
            <Button><IoClose size={25} /></Button>
          </Form>
        </Dialog>
      }
    </>
  )
}

export default ModalZoom