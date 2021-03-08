import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Categorie = styled(LinearGradient)`
  background-color: #e74c3c;
  padding: 6px 0;
  margin: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-direction: row;
`;

export const CategorieText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  padding-left: 10px;
  color: #fff;
  text-transform: uppercase;
`;