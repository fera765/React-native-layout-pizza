import styled, { css } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface BtnProps extends TouchableOpacityProps {
  btn?: string;
}

interface Size {
  active: boolean;
}

export const Container = styled.View`
  margin: 0 15px;
`;
export const PopularPizza = styled.Text`
  width: auto;
  height: 33px;
  left: 12px;
  top: 39px;

  font: 600 28px/33px 'San Francisco Display';
  font-style: normal;

  color: #363248;
`;
export const Content = styled.View`
  flex-direction: column;
`;

export const PicImage = styled.View`
  position: absolute;
  right: 0;
  top: 70px;
  width: 192px;
  height: 192px;
  z-index: 100;
  padding: 0 10px;
  align-items: center;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContentText = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 170px;

  background: #f5f5f5;
  border-radius: 14px;
`;
export const TypePizza = styled.Text`
  width: 139px;
  height: 19px;
  left: 33px;
  margin-top: 45px;

  font: normal 14px/19px 'Playfair Display';
  font-style: normal;

  color: rgba(35, 30, 54, 0.8);
`;

export const TitlePizza = styled.Text`
  width: 200px;
  height: 48px;
  left: 33px;
  margin-top: 16px;

  font: bold 18px/24px 'Playfair Display';
  color: #231e36;
`;

export const Ratting = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 54px;
  height: 26px;
  padding: 5px 8px;
  margin: 16px 33px 0;
  background: #fc4d4d;
  border-radius: 12px;
`;

export const RattingText = styled.Text`
  font: 500 12px/14px 'San Francisco Display';
  font-style: normal;
  color: #fff;
`;

export const BoxDescription = styled.View`
  margin: 14px 33px;
  width: 315px;
  height: 84px;
`;
export const TextBoxDescription = styled.Text`
  height: 60px;
  margin-top: 10px;
  font: normal 12px/14px 'San Francisco Display';
  color: rgba(35, 30, 54, 0.8);
`;

export const SizePizza = styled.View`
  width: 88px;
  height: 24px;
  margin: 14px 33px 0;
  justify-content: space-around;
  flex-direction: row;
`;
export const SizeText = styled.Text<Size>`
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

export const Btn = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const ContentBuy = styled.View`
  margin: 46px 33px;
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

export const ContentBuyBtn = styled.TouchableOpacity<BtnProps>`
  margin-left: 17.35px;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  background: #fd4040;
  border-radius: 12px;

  ${props =>
    props.btn === 'heart' &&
    css`
      background: #f5f5f5;
      border: 1px solid rgba(35, 30, 54, 0.7);
      border-radius: 12px;
    `};
`;
