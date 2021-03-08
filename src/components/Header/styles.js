import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled(LinearGradient)`
  height: auto;
  padding: 30px 15px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding-top: 25px;
`;

export const Titulo = styled.Text`
  font-family: 'Glegoo-Bold';
  color: #fff;
  font-size: 20px;
`;

export const Cart = styled(TouchableOpacity)`
  justify-content: center;
`;

export const Amount = styled.View`
  width: 60%;
  height: 60%;
  position: absolute;
  padding-bottom: 36px;
`;

export const CartSize = styled.Text`
  color: #fff;
  background: #e74c3c;
  padding: 10%;
  font-size: 8px;
  border-radius: 10px;
  text-align: center;
`;

export const Absolute = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 100px;
  height: 40px;
  background: #fff;
  position:absolute;
  border-radius: 50px;
`;