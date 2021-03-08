import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #fff;
`;



export const Product = styled.View`
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
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
  padding: 10px 0;
  justify-content: center;
`;

export const View = styled.View`
  padding-right: 10px;
  flex-direction: row;
  justify-content:space-between;
`;

export const ViewTitle = styled.View`
  flex: 1;
  padding-right: 10px;
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



export const Footer = styled.View`
  margin: 0 5px 5px 5px;
  padding: 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 3;
  background: #ecf0f1;
`;

export const Price = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #34495e;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 18px;
  margin: 0 10px;
  color: #7f8c8d;
`;



export const Total = styled(LinearGradient)`
  padding: 10px;
  border-radius: 15px;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 20px;
  color: #fff;
`;

export const StyleIcon = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: #e74c3c;
`;





