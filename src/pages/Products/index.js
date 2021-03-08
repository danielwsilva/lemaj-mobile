import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Header  from '../../components/Header';
import { formatPrince }  from '../../util/format';
import Categories from '../../components/Categories';

import Products from '../../../server';

import {
  Container, 
  Input,
  TextInput,
  StyleIcon,
  Product, 
  ImageProduct, 
  Image, 
  Information, 
  Title, 
  Description, 
  Price
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState(null);
  const [products, setProducts] = useState();

  useEffect(() => {
    navigation.addListener('focus', () => setValue(null));
    getData();
  }, [value, navigation]);

  const getData = () => {
    if (value === null) {
      setProducts(null);
      setProducts(Products);
    } else {
      let filteredData = Products.filter(x => String(x.title).includes(value));
      setProducts(filteredData);
    }
  }
  
  const renderItem = ({item, index}) => {
    return(  
      <>
        <Categories index={index} value={value}/>    
        <Product key={index} activeOpacity={0.8} onPress={() => navigation.navigate('Product', { item })}>
          <ImageProduct>
            <Image 
              source={item.image}
              resizeMode={'contain'}
            />
          </ImageProduct>
          <Information>
            <Title>{item.title}</Title>
            <Description>{String(item.description).substr(0, 70) + '...'}</Description>
            <Price>{formatPrince(item.price)}</Price>
          </Information>
        </Product>
    </>
    )
  }

  return (
    <>
      <Header title={'PRODUTOS'} route={'Home'}/>
      <Container>
        <Input>
          <TextInput 
            autoCorrect={false} 
            autoCapitalize="characters"
            placeholder="Buscar Produto"
            value={value}
            onChangeText={(text) => setValue(text)}
          />
            <StyleIcon>
              <Icon name="search" color="#fff" size={20} />
            </StyleIcon>    
        </Input>

        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index)=> index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
}

export default Home;