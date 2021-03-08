import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: 20px 20px 60px 20px;
`;

export const ViewLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 40px;
`;

export const Logo = styled.Image`
  height: 70%;
`;

export const View = styled.View`
  width: 100%;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
  elevation: 10;
  background: #fff;
`;

export const Title = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 18px;
  color: #2c3e50;
`;

export const SubTitle = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 12px;
  color: #95a5a6;
  text-align: center;
  padding-bottom: 20px;
`;

export const ViewInput = styled(LinearGradient)`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  padding: 2px;
  elevation: 2;
`;

export const ViewInternal = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  background: #fff;
`;

export const ViewIcon = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-right: 2px;
  background-color: ${(props) => props.validated ? '#e86d5e' : '#218c74'};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  border-radius: 50px;
  padding-left: 15px;
  font-family: 'Glegoo-Regular';
  font-size: 12px;
  background:#fff;
`;

export const Login = styled(LinearGradient)`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const TextLogin = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 20px;
  color: #FFF;
`;

export const ViewSwitch = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content:flex-end;
  padding-top: 5px;
  padding-bottom: 15px;
`;

export const TextSwitch = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 10px;
  color: #95a5a6;
`;