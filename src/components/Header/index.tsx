import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps { //Com uso do typescript é "bom" definir quais são as propriedade
  onOpenNewTrasactionModal: () => void; // essa propriedade é uma função que não devolve parametro por isso void
}

export function Header({ onOpenNewTrasactionModal }: HeaderProps) { //add propriedades para receber a função do onClick do botão
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTrasactionModal}>
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}