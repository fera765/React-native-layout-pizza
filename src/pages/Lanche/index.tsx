import React, { useState } from 'react';
import { Image, View } from 'react-native';

import {
  Container,
  Title,
  Card,
  ProductList,
  ProductContainer,
  TypePizza,
  TitlePizza,
} from './styles';

import PizzaPic from '../../assets/pizza.png';

const Lanche: React.FC = () => {
  const data = [
    {
      id: '1',
      imageUrl: PizzaPic,
      title: 'something',
    },
    {
      id: '12',
      imageUrl: PizzaPic,
      title: 'something two',
    },
    {
      id: '13',
      imageUrl: PizzaPic,
      title: 'something three',
    },
    {
      id: '14',
      imageUrl: PizzaPic,
      title: 'something four',
    },
    {
      id: '5',
      imageUrl: PizzaPic,
      title: 'something five',
    },
    {
      id: '16',
      imageUrl: PizzaPic,
      title: 'something six',
    },
  ];
  const [lisPizzas, setListPizzas] = useState(data);
  return (
    <Container>
      <Title>Lanche Populares</Title>
    </Container>
  );
};

export default Lanche;
