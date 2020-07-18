import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  PopularPizza,
  Content,
  PicImage,
  Image,
  ContentText,
  TypePizza,
  TitlePizza,
  Ratting,
  RattingText,
  BoxDescription,
  TextBoxDescription,
  SizePizza,
  SizeText,
  Btn,
  ContentBuy,
  ContentBuyText,
  ContentBuyTextCoin,
  ContentBuyBtn,
} from './styles';

interface ItemProps {
  route: {
    params: {
      item: {
        id: string;
        title: string;
        imageUrl: string;
        ratting: number;
        active: boolean;
      };
      title: string;
    };
  };
}

const Product: React.FC<ItemProps> = ({ route }) => {
  const { item } = route.params;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PopularPizza>{route.params.title}</PopularPizza>
        <Content>
          <PicImage>
            <Image
              style={{ resizeMode: 'contain' }}
              source={{ uri: item.imageUrl }}
            />
          </PicImage>
          <ContentText>
            <TypePizza>classic</TypePizza>
            <TitlePizza>{item.title}</TitlePizza>
            <Ratting>
              <Icon name="star" size={12} color="#fff" />
              <RattingText>{item.ratting}</RattingText>
            </Ratting>
            <BoxDescription>
              <Text style={{ fontFamily: 'San Francisco Display' }}>
                Descrição
            </Text>
              <TextBoxDescription>
                Shrimp, onion, red capsicum, pineapple, black olive, parsley,
                Mozzarella cheese, string cheese two color, Sweet chili sauce.
                Cheesy Bites Trio.
            </TextBoxDescription>
            </BoxDescription>
            <SizePizza>
              <SizeText active={false}>P</SizeText>
              <SizeText active={item.active}>M</SizeText>
              <SizeText active={false}>G</SizeText>
            </SizePizza>

            <ContentBuy>
              <View>
                <ContentBuyText>32,00</ContentBuyText>
                <ContentBuyTextCoin>R$</ContentBuyTextCoin>
              </View>
              <Btn>
                <ContentBuyBtn btn="heart" activeOpacity={0.7}>
                  <Icon name="heart" size={23} color="rgba(35, 30, 54, 0.7);" />
                </ContentBuyBtn>
                <ContentBuyBtn btn="buy" activeOpacity={0.7}>
                  <Icon name="shopping-bag" size={23} color="#fff" />
                </ContentBuyBtn>
              </Btn>
            </ContentBuy>
          </ContentText>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Product;
