import React from 'react';
import { ScrollView } from 'react-native';

import { Container, Title, Item, Border, Image, Quantity, TitleItem, BoxPriceItem, Moeda, PriceItem, BoxTotalItems, TotalItemsText, BoxTotal, TotalItems, BoxTotalPrices, TotalPriceMoeda, TotalPrice, CheckroutButton, CheckroutButtonText } from './styles';

const Cart: React.FC = () => {

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Carrinho de Compras</Title>
        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />

        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <Item>
          <Image style={{ resizeMode: 'contain' }} source={{ uri: 'https://www.flavorpizza.com.br/system/painel/images/pizza02.png' }} />

          <Quantity>+1</Quantity>
          <TitleItem>Cheesy bites trio shrimp pizza</TitleItem>

          <BoxPriceItem>
            <Moeda>R$</Moeda>
            <PriceItem>28,00</PriceItem>
          </BoxPriceItem>
          <Border />
        </Item>

        <BoxTotal>
          <BoxTotalItems>
            <TotalItemsText>Subtotal</TotalItemsText>
            <TotalItems>( 7 items )</TotalItems>
          </BoxTotalItems>
          <BoxTotalPrices>
            <TotalPriceMoeda>R$</TotalPriceMoeda>
            <TotalPrice>196,00</TotalPrice>
          </BoxTotalPrices>
        </BoxTotal>
        <CheckroutButton activeOpacity={0.9}>
          <CheckroutButtonText>Checkout</CheckroutButtonText>
        </CheckroutButton>
      </ScrollView>
    </Container>
  )
}

export default Cart;
