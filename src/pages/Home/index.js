import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container, 
  View, 
  ViewLogo,
  Logo, 
  Title, 
  SubTitle, 
  ViewInput, 
  TextInput, 
  ViewIcon, 
  ViewInternal, 
  Login, 
  TextLogin, 
  ViewSwitch,
  TextSwitch
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  const [controller, setController] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();

  useEffect(() => {
    getData();
    storeData();
  }, [isSwitchOn]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_email');
      if(value !== null && !controller) {
        setEmail(value);
        setIsSwitchOn(true);
      }
    } catch(e) {
      alert(e);
    }
  }

  const storeData = async () => {
    try {
      if(!isSwitchOn && controller) {
        await AsyncStorage.setItem('@storage_email', '');
      }
      else if (isSwitchOn && email) {
        await AsyncStorage.setItem('@storage_email', email);
      } 
      setController(true);
    } 
    catch (e) {
      alert(e);
    }
  }

  const handleValidateMail = () => {  
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(email) === false) {
      setValidated(true);
    } else {
      setValidated(false);
      handleNavigation();
    }
  }

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const handleNavigation = () => navigation.navigate('Products');

  return (
    <>
      <Container colors={['#3498db', '#27ae60']} start={{x:0, y:2}} end={{x:1, y:0}}>
        <ViewLogo>
          <Logo source={require("../../assets/logo.png")} resizeMode={'contain'}/>
        </ViewLogo>
        <View>
          <Title>Grandha Produtos</Title>
          <SubTitle>Informe o e-mail para ter acesso aos produtos</SubTitle>
          <ViewInput colors={['#3498db', '#27ae60']} start={{x:1, y:0}} end={{x:0, y:0.5}}>
            <ViewInternal>
              <TextInput 
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Informe seu e-mail" 
                value={email}
                onChangeText={(text) => setEmail(text)}
                returnKeyType="send"
                onSubmitEditing={handleValidateMail}
              />
              <ViewIcon validated={validated}>
                <Icon name="mail" color="#fff" size={20} />  
              </ViewIcon>
            </ViewInternal>
          </ViewInput>
    
          <ViewSwitch>
            <TextSwitch>Salvar e-mail</TextSwitch>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} trackColor={{ false: "#ecf0f1", true: "#68dbc4" }} thumbColor={isSwitchOn ? "#1abc9c" : "#ecf0f1"}/>
          </ViewSwitch>

          <TouchableOpacity style={{width: '100%'}} activeOpacity={0.8} onPress={() => handleValidateMail()}>  
            <Login colors={['#3498db', '#27ae60']} start={{x:2, y:0}} end={{x:0, y:0.5}}>
              <TextLogin>Entrar</TextLogin>
            </Login>
          </TouchableOpacity>
        </View>
      </Container>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/> 
    </>
  );
}

export default Home;