import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import api from '../../services/api';

import ListOffer from '../../components/LisrOffer';

import { Container, ButtonCart, BeforeItem } from './styles';

const Pizza: React.FC = () => {
  const navigation = useNavigation();
  const [isSkeleton, setIsSkeleton] = useState(true);
  const [lisPizzas, setlisPizzas] = useState([]);
  const [dataList, setdataList] = useState([]);

  useEffect(() => {
    handlePizzas();
  }, []);

  async function handlePizzas() {
    const [popular, offerday] = await Promise.all([
      api.get('/pizzas'),
      api.get('/pizzas?offerDay=1')
    ])

    setlisPizzas(popular.data)
    setdataList(offerday.data)
    setIsSkeleton(false);
  }

  return (
    <Container>
      {!isSkeleton && (
        <ButtonCart
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <BeforeItem>7</BeforeItem>
          <Icon name="shopping-cart" size={30} color="#fff" />
        </ButtonCart>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListOffer data={dataList} title="Pizzas Populares" loading={isSkeleton} />
        <ListOffer data={lisPizzas} title="Promoção do Dia" loading={isSkeleton} />
      </ScrollView>
    </Container>
  );
};

export default Pizza;
