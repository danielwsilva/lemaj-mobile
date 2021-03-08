import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import { FlatList  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrince }  from '../../util/format';

import NotFount from '../../components/NotFound';
import Header  from '../../components/Header';

import {
  Container, 
  Product, 
  ImageProduct, 
  Image, 
  Information, 
  View,
  ViewTitle,
  Title, 
  Description,
  Footer,
  Price,
  Amount,
  Count,
  Total,
  TotalText,
  StyleIcon
 } from './styles';

const Cart = ({products, total, removeFromCart, updateAmount}) => {
  const navigation = useNavigation();

  const [fount, setFount] = useState(false);

  const increment = (item) => {
    updateAmount(item.id, item.amount + 1);
  }

  const decrement = (item) => {
    updateAmount(item.id, item.amount - 1);
  }

  const renderItem = ({item, index}) => {
    return( 
      <>     
        <Product key={index} activeOpacity={0.8} onPress={() => navigation.navigate('Product', { item })}>
          <ImageProduct>
            <Image 
              source={item.image}
              resizeMode={'contain'}
            />
          </ImageProduct>
          <Information>
            <View>
              <ViewTitle>
                <Title>{item.title}</Title>
              </ViewTitle>
              <Icon name="trash-2" color="#e74c3c" size={20} onPress={() => removeFromCart(item.id, false)}/>
            </View>
            <Description>{String(item.description).substr(0, 75)+ '...'}</Description>
          </Information>
        </Product>

        <Footer>
          <Price>{formatPrince(item.price)}</Price>
          <Amount>
            <Icon name="minus-circle" color="#34495e" size={25} onPress={() => decrement(item)}/>  
            <Count>{item.amount}</Count>
            <Icon name="plus-circle" color="#34495e" size={25} onPress={() => increment(item)}/>
          </Amount>
          <Price>{item.subtotal}</Price>
        </Footer>
      </>
    )
  }

  return (
    <>
      <Header title={'CARRINHO'}/>
      <Container>
        {
          !products[0] ? (
            <NotFount fount={fount}/>
          ) : (
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item, index)=> index.toString()}
              showsVerticalScrollIndicator={false}
            />
          )
        }
        <Total
          colors={['#3498db', '#27ae60']}
          start={{x:2, y:0}} 
          end={{x:0, y:0.5}}
        >
          <TotalText>Total</TotalText>
          <TotalText>{total}</TotalText>
          <StyleIcon activeOpacity={0.8} onPress={() => !products.length ? setFount(true) : navigation.navigate('Confirm')}>
            <Icon name="chevron-right" color="#FFF" size={30}/>
          </StyleIcon>
        </Total>
      </Container>
    </>
  );
}

const mapStateTopProps = state => ({
  products: state.cart.map(item => ({
    ...item,
    subtotal: formatPrince(item.price * item.amount)
  })),
  total: formatPrince(state.cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateTopProps, mapDispatchToProps)(Cart);
