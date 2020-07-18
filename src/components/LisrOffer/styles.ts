import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ratting: number;
  active: boolean;
  off: {
    active: boolean;
    toast: number;
  };
}

interface Size {
  active: boolean;
}

export const Title = styled.Text`
  margin-top: 33px;
  font: 600 28px/33px 'San Francisco Display';
  font-family: 'San Francisco Display';
  font-style: normal;
  color: #363248;
`;

export const Content = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  margin-top: 20px;
  height: 100%;
`;
export const Card = styled.View`
  width: 168px;
  max-height: 527px;
`;

export const ProductContainer = styled.View`
  margin: 0 9px;
  width: 200px;
`;

export const PicImage = styled.View`
  width: 142px;
  height: 142px;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  flex: 1;

  width: 100%;
  height: 100%;
  max-width: 105px;
  max-height: 200px;
`;

export const PicPingo = styled.Text`
  position: absolute;
  width: 55px;
  height: 44px;
  right: -40px;
  top: 1px;
  text-align: center;
  border-top-left-radius: 300px;
  border-top-right-radius: 140px;
  border-bottom-right-radius: 220px;
  background: #fa5b5b;
  font: normal 32px/38px 'Playfair Display';
  font-style: normal;
  color: #ffffff;
`;
export const PicPingoMin = styled.View`
  position: absolute;
  width: 19px;
  height: 19px;
  right: -4px;
  top: 50px;
  background: #fa5b5b;
  border-top-right-radius: 280px;
  border-bottom-right-radius: 180px;
  border-bottom-left-radius: 250px;
`;

export const TypePizza = styled.Text`
  font: normal 14px/19px 'Playfair Display';
  margin-top: 18px;
  font-style: normal;
  color: rgba(35, 30, 54, 0.8);
`;
export const TitlePizza = styled.Text`
  margin-top: 12px;
  font: bold 18px/24px 'Playfair Display';
  font-style: normal;

  color: #231e36;
`;

export const Ratting = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 54px;
  padding: 5px 8px;
  height: 26px;
  background: #fc4d4d;
  border-radius: 12px;
`;

export const RattingText = styled.Text`
  font: 500 12px/14px 'San Francisco Display';
  font-style: normal;
  color: #fff;
`;

export const SizePizza = styled.View`
  width: 88px;
  height: 24px;
  justify-content: space-around;
  flex-direction: row;
`;
export const SizeText = styled.Text<Size>`
  margin-top: 15px;
  width: 24px;
  height: 24px;

  border: 1px solid rgba(35, 30, 54, 0.7);
  text-align: center;
  border-radius: 100px;
  font: bold 12px/22px 'Playfair Display';
  font-style: normal;

  color: rgba(35, 30, 54, 0.7);

  ${props =>
    props.active &&
    css`
      background: #fc4d4d;
      border: 1px solid rgba(250, 92, 92, 0.5);
      color: #fff;
    `};
`;

export const ContentBuy = styled.View`
  margin-top: 46px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const ContentBuyText = styled.Text`
  font: bold 26px/31px 'San Francisco Display';
  font-style: normal;

  color: #231e36;
`;
export const ContentBuyTextCoin = styled.Text`
  position: absolute;
  height: 15px;
  right: -18px;
  font: bold 12px/15px 'San Francisco Display';
  font-style: normal;

  color: #231e36;
`;

export const ContentBuyBtn = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  background: #fd4040;
  border-radius: 12px;
`;

export const DescriptionDay = styled.View`
  margin: 12px 0 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const DescriptionDayText = styled.Text`
  font: normal 12px/14px 'San Francisco Display';
  margin-left: 10px;
  font-style: normal;
  color: rgba(35, 30, 54, 0.8);
`;

export const DescriptionDayBorder = styled.View`
  width: 1px;
  height: 48px;
  background: #fa5c5c;
`;
