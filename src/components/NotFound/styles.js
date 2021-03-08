import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Cart = styled.Image`
  height: 60px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 18px;
  color: ${props => props.fount ? '#e74c3c' : '#2c3e50'};
`;

export const SubTitle = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 12px;
  color: #95a5a6;
  text-align: center;
  padding-bottom: 20px;
`;