import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 60px 20px;
  background: #fff;
`;

export const View = styled.View`
  background: #fff;
  align-items: center;
  padding-top: 135px;
  border-radius: 5px;
  elevation: 3;
`;

export const Image = styled.Image`
  height: 200px;
  position: absolute;
  margin-top: -60px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 17px;
  color: #2c3e50;
  text-align: center;
`;

export const Price = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 18px;
  color: #e74c3c;
`;

export const ViewDescription = styled.View`
  padding: 0 15px;
`;

export const Description = styled.Text`
  font-family: 'Glegoo-Regular';
  text-align:center;
  font-size: 11px;
  padding-bottom: 4px;
  color: #7f8c8d;
`;

export const Banner = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #ecf0f1;
`;

export const Count = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 18px;
  margin: 0 17px;
  color: #7f8c8d;
`;

export const TotalText = styled.Text`
  height: 26px;
  font-family: 'Glegoo-Regular';
  font-size: 20px;
  margin-top: 20px;
  color: #7f8c8d;
`;

export const Total = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 30px;
  color: #e74c3c;
  padding-bottom: 30px;
`;

export const Absolute = styled.View`
  padding-top: 35px;
  align-items: center;
`;

export const Comprar = styled(LinearGradient)`
  width: 90%;
  height: 60px;
  border-radius: 50px;
  position: absolute;
`;

export const Opacity = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ComprarText = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 20px;
  padding-bottom: 4px;
  color: #FFF;
`;
