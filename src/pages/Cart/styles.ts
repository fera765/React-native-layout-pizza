import styled, { css } from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 margin: 0 12px;

`;

export const Title = styled.Text`
 margin-top: 7px;
 height: 33px;
 left: 12px;
 font: 600 28px/33px 'San Francisco Display';
 font-style: normal;
 color: #363248;
`;
export const Item = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  width: 100%;
  height: 90px;
`;
export const Border = styled.View`
  position: absolute;
  width: 79%;
  height: 0.66px;
  border: 1px solid #E9E9E9;
  right: 0;
  bottom: 0;
`;
export const Image = styled.Image`
 width: 78px;
 height: 78px;
`;
export const Quantity = styled.Text`
  width: 26px;
  height: 27px;
  margin-left: 16px;

  font: bold 14px/19px 'Playfair Display';
  font-style: normal;
  color: #231e36;
`;
export const TitleItem = styled.Text`
  width: 143px;
  height: 38px;
  margin-left: 7px;

  font: bold 14px/19px 'Playfair Display';
  font-style: normal;

  color: #231e36;
`;
export const BoxPriceItem = styled.View`
  position: absolute;
  right: 40px;
  min-width: 50px;
  max-height: 60px;
`;
export const Moeda = styled.Text`
  position: absolute;
  right: -20px;
  top: -8px;
  width: auto;
  font: bold 13px/18px 'Playfair Display';
  color: #231e36;
`;
export const PriceItem = styled.Text`
  min-width: 37px;
  height: 24px;
  font: bold 20px/24px 'San Francisco Display';
  font-style: normal;

  color: #231e36;
`;


export const BoxTotal = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
`;
export const BoxTotalItems = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  min-width: 149px;
  height: 29px;
`;
export const TotalItemsText = styled.Text`
  font: 500 24px/29px 'San Francisco Display';
  font-style: normal;

  color: #231e36;
`;
export const TotalItems = styled.Text`
  font: normal 15px/29px 'San Francisco Display';
  font-style: normal;
  margin-left: 10px;

  color: #231e36;
`;
export const BoxTotalPrices = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
`;
export const TotalPriceMoeda = styled.Text`
  position: absolute;
  right: -20px;
  top: -8px;
  width: auto;
  font: bold 13px/18px 'Playfair Display';
  color: #231e36;
`;
export const TotalPrice = styled.Text`
  min-width: 37px;
  height: 24px;
  font: bold 24px/29px 'San Francisco Display';
  font-style: normal;

  color: #231e36;
`;

export const CheckroutButton = styled.TouchableOpacity`
 width: 100%;
 height: 69px;
 margin: 46px 0 20px 0;
 align-items: center;
 justify-content: center;

 background: #FC4040;
 border-radius: 14px;
`;

export const CheckroutButtonText = styled.Text`
  font: 800 28px/28px 'San Francisco Display';
  font-style: normal;

  color: #FFFFFF;
`;
