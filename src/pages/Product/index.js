import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrince }  from '../../util/format';

import Header from '../../components/Header';

import { 
  Container, 
  View,
  Image,  
  Title, 
  ViewDescription,
  Description, 
  Price,
  Banner,
  Count,
  TotalText,
  Total,
  Absolute,
  Comprar,
  Opacity,
  ComprarText } from './styles';

const Product = ({route, addToCart}) => {
  const navigation = useNavigation();
  const { item } = route.params;

  const [amount, setAmount] = useState(1);

  useEffect(()=>{
    navigation.addListener('focus', () => setAmount(1));
  },[navigation]);

  const handleAddProduct = (item, amount) => {
    addToCart(item, amount);
  }

  const increment = () => {
    setAmount(amount+1);
  }

  const decrement = () => {
    setAmount(amount >= 2 ? amount-1 : amount);
  }

  return (
    <>
      <Header title={'PRODUTO'} route={'Products'}/>     
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
        <Container>
          <View>
            <Image 
              source={item.image}
              resizeMode={'contain'}
            />
            <ViewDescription>
              <Title>{item.title}</Title>
            </ViewDescription>
            <Price>{formatPrince(item.price)}</Price>
            <ViewDescription>
              <Description>{item.description}</Description>
            </ViewDescription>
            <Banner>
              <Icon name="minus-circle" color="#95a5a6" size={30} onPress={() => decrement()}/>  
              <Count>{amount}</Count>
              <Icon name="plus-circle" color="#95a5a6" size={30} onPress={() => increment()}/>
            </Banner>
            <TotalText>Total</TotalText>
            <Total>{formatPrince(item.price*amount)}</Total>
            
              <Absolute>
                <Comprar
                  colors={['#e67e22', '#e74c3c']}
                  start={{x:1, y:0}} 
                  end={{x:0, y:1}}
                >
                <Opacity activeOpacity={0.5} onPress={() => handleAddProduct(item, amount)}>
                  <ComprarText>Comprar</ComprarText>
                </Opacity>
                </Comprar>
              </Absolute>
          </View>
        </Container>   
      </ScrollView>  
    </>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Product);