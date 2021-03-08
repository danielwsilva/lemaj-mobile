import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #fff;
`;

export const Input = styled.View`
  width: 100%;
  height: 44px;
  background: #fff;
  align-items: center;
  flex-direction: row;
  border-radius: 40px;
  margin-bottom: 10px;
  elevation: 2;
`;

export const TextInput = styled.TextInput`
  flex:1;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding-left: 15px;
  font-family: 'Glegoo-Regular';
  font-size: 12px;
`;

export const StyleIcon = styled.View`
  width: 35px;
  height: 35px;
  background-color: #218c74;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-right: 2px;
`;

export const Product = styled(TouchableOpacity)`
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  elevation: 2;
`;

export const ImageProduct = styled.View`
  padding: 5px;
  justify-content: center;
`;

export const Image = styled.Image`
  padding: 50px;
  width: 100%;
  height: 10px;
  border-radius: 15px;
`;

export const Information = styled.View`
  flex: 1;
  margin-right: 10px;
  padding: 10px 0;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 14px;
  color: #2c3e50;
  padding-bottom: 4px;
`;

export const Description = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 11px;
  padding-bottom: 4px;
  color: #7f8c8d;
`;

export const Price = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #e74c3c;
`;