import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding: 90px 40px;
  align-items: center;
  justify-content: center;

`;

export const Text = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10px;
`;

export const Button = styled(LinearGradient)`
  width: 100%;
  height: 60px;
  padding: 2.5px;
  border-radius: 50px;
  margin-bottom: 40px;
`;

export const ViewButton = styled.View`
  flex: 1;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.check ? 'transparent' : '#fff')};
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 18px;
  padding-left: 10px;
  color: ${(props) => (props.check ? '#fff' : '#2c3e50')};
`;