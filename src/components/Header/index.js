import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconCart from 'react-native-vector-icons/FontAwesome';
import IconArrow from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';

import { Container, Wrapper, Titulo, Cart, Amount, CartSize, Absolute } from './styles';

const Header = ({title, cartSize, route = 'Products'}) => {
  const navigation = useNavigation();

  return (
    <>
      <Container
        colors={['#1abc9c', '#27ae60']}
        start={{x:1, y:0}} 
        end={{x:0, y:1}}
      >
        <Wrapper>
          <IconArrow name="arrow-left" color="#fff" size={30} onPress={() => navigation.navigate(route)}/>
          <Titulo>{title}</Titulo>

          <Cart activeOpacity={0.85} onPress={() => navigation.navigate('Cart')}>
            <IconCart name="shopping-basket" color="#fff" size={20} />
            <Amount>
              {
                cartSize > 0 && <CartSize>{cartSize}</CartSize>
              }
            </Amount>
          </Cart>
        </Wrapper>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content" />   
      </Container>
      <Absolute />
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);