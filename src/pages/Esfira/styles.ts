import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 30px 15px 0 12px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  font-style: normal;
  line-height: 33px;

  color: #363248;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  background: #000;
  position: absolute;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const Card = styled.View``;
export const TitlePizza = styled.Text``;
export const TypePizza = styled.Text``;
