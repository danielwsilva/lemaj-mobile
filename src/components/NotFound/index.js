import React from 'react';

import { Container, Cart, Title, SubTitle } from './styles';

const NotFound = ({fount}) => {
  return (
    <Container>
      <Cart source={require("../../assets/cart.png")} resizeMode={'contain'}/>
      <Title fount={fount}>Seu carrinho está vazio</Title>
      <SubTitle>Adicione produtos clicando no botão “Comprar” na página de produto.</SubTitle>
    </Container>
  );
}

export default NotFound;