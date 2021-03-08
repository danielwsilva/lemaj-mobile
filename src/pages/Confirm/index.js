import React from 'react';
import { TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RNPrint from 'react-native-print';
import Icon from 'react-native-vector-icons/Feather';
import qs from 'qs';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrince }  from '../../util/format';

import Header from '../../components/Header';

import { 
  Container, 
  Text, 
  Button, 
  ViewButton, 
  TextButton 
} from './styles';

const Confirm = ({products, total, removeFromCart}) => {
  const navigation = useNavigation();

  const renderTableHeader = () => {
    let object = Object.keys(products[0]);
    const filter = object.filter((e) => e !== 'description' && e !== 'image');

    const header = filter.map((e) => {
      let treatment = '';
      
      if (e === 'id')
        treatment = 'id';
      else if (e === 'title')
        treatment = 'produto';
      else if (e === 'price')
        treatment = 'preço';
      else if (e === 'amount')
        treatment = 'qtd';
      else
        treatment = 'subtotal';

      return treatment;
    });

    return header.map((key, index) => {
      return `<th key=${index}>${key.toUpperCase()}</th>`
    });
  }

  const renderTabeData = () => {
    return products.map((item, index) => {
      const { id, title, price, amount, subtotal } = item;
      return (
        `<tr key=${id}>
          <td>${id}</td>
          <td>${title}</td>
          <td>${formatPrince(price)}</td>
          <td>${amount}</td>
          <td>${subtotal}</td>
        </tr>`
      );
    });
  }

  const printHTML = async () => {
    let html_content = 
    `<style>
      #title {
        text-align: center;
        font-famiy: arial, sans-serif;
      }

      #products {
        text-align: center;
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        boder: 3px solid #ddd;
        width: 100%;
      }

      #products td, #products th {
        border: 1px solid #ddd;
        padding: 8px;
      }

      #products tr:nth-child(even) {background-color: #fff; }

      #products th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
      }

      #total {
        width: 100%;
        background-color: #4CAF50;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-top: 10px;
      }

      #titleTotal {
        padding: 0 20px;
        font-famiy: arial, sans-serif;
        color: #fff;
      }
    </style>

    <div>
      <h1 id='title'>SOLICITAÇÃO DE PEDIDO - PRODUTOS GRANDLA</h1>
      <table id='products'>
        <tbody>
          <tr>${renderTableHeader()}</tr>
          ${renderTabeData()}
        </tbody>
      </table>
    </div>

    <div id='total'>
      <h2 id='titleTotal'>TOTAL</h2>
      <h2 id='titleTotal'>${total}</h2>
    </div>`
    
    await RNPrint.print({
      html: html_content
    });
  }

  const sendEmail = async () => {
    let url = `mailto: jhe_carol31@hotmail.com`;

    const query = qs.stringify({
      subject: 'Solicitação de Pedido - Produtos Grandla',
      body: `Olá, ${'\n'} ${'\n'} Segue em anexo solicitação de pedido. ${'\n'} ${'\n'} Att, ${'\n'} Jéssica Caroline`,
    });

    url += `?${query}`;

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  }

  const handleFinish = async () => {
    await removeFromCart(null, true);

    navigation.navigate('Products');
  }

  return (
    <>
      <Header title='FINALIZAR' route={'Cart'}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
        <Container>
          <Text>1. Gerar o arquivo PDF</Text>
          
          <TouchableOpacity style={{width: '100%'}} activeOpacity={0.8} onPress={() => printHTML()}>  
            <Button colors={['#3498db', '#27ae60']} start={{x:2, y:0}} end={{x:0, y:0.5}}>
              <ViewButton>
                <Icon name="file-text" color="#2c3e50" size={20}/>
                <TextButton>Documento</TextButton>
              </ViewButton>
            </Button>
          </TouchableOpacity>

          <Text>2. Enviar e-mail para Destinatário e anexar PDF gerado acima</Text>

          <TouchableOpacity style={{width: '100%'}} activeOpacity={0.8} onPress={() => sendEmail()}>  
            <Button colors={['#3498db', '#27ae60']} start={{x:2, y:0}} end={{x:0, y:0.5}}>
              <ViewButton>
                <Icon name="mail" color="#2c3e50" size={20}/>
                <TextButton>E-mail</TextButton>
              </ViewButton>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity style={{width: '100%', paddingTop: 50}} activeOpacity={0.8} onPress={() => handleFinish()}>  
            <Button colors={['#3498db', '#27ae60']} start={{x:2, y:0}} end={{x:0, y:0.5}}>
              <ViewButton check={true}>
                <Icon name="check" color="#fff" size={20}/>
                <TextButton check={true}>Finalizar</TextButton>
              </ViewButton>
            </Button>
          </TouchableOpacity>
        </Container>
      </ScrollView>
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

export default connect(mapStateTopProps, mapDispatchToProps)(Confirm);