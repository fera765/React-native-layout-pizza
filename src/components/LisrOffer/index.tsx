import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Skeleton from './Skeleton';

import {
  Title,
  Content,
  Card,
  ProductList,
  Image,
  ProductContainer,
  PicImage,
  PicPingo,
  PicPingoMin,
  TypePizza,
  TitlePizza,
  Ratting,
  RattingText,
  SizePizza,
  SizeText,
  ContentBuy,
  ContentBuyText,
  ContentBuyTextCoin,
  ContentBuyBtn,
  DescriptionDay,
  DescriptionDayBorder,
  DescriptionDayText,
} from './styles';

interface OffertProps {
  data: any;
  title: string;
  loading: boolean;
}

const ListOffer: React.FC<OffertProps> = ({ data, title, loading }) => {
  const navigation = useNavigation();

  if (loading) {
    return <Skeleton />
  }

  return (
    <>
      <Title>{title}</Title>
      <Content>
        <ProductList
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductContainer>
              <Card>
                <PicImage>
                  <Image
                    style={{ resizeMode: 'contain' }}
                    source={{ uri: item.imageUrl }}
                  />
                  {item.off.active && (
                    <>
                      <PicPingoMin />
                      <PicPingo>
                        <Icon name="plus" size={10} color="#fff" />
                        {item.off.toast}
                      </PicPingo>
                    </>
                  )}
                </PicImage>
                <TypePizza>classic</TypePizza>
                <TitlePizza>{item.title}</TitlePizza>
                <Ratting>
                  <Icon name="star" size={12} color="#fff" />
                  <RattingText>{item.ratting}</RattingText>
                </Ratting>

                {!!item.description && (
                  <DescriptionDay>
                    <DescriptionDayBorder />
                    <DescriptionDayText>{item.description}</DescriptionDayText>
                  </DescriptionDay>
                )}

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
                  <ContentBuyBtn
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('Product', { item, title });
                    }}
                  >
                    <Icon name="shopping-bag" size={23} color="#fff" />
                  </ContentBuyBtn>
                </ContentBuy>
              </Card>
            </ProductContainer>
          )}
        />
      </Content>
    </>
  );
};

export default ListOffer;
