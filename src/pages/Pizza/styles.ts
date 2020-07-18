import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 15px 0 12px;
  background: #fff;
`;

export const ButtonCart = styled.TouchableOpacity`
  position: absolute;
  bottom: 45px;
  background: #FC4040;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  right: 14px;
  z-index: 900;
`;
export const BeforeItem = styled.Text`
  position: absolute;
  min-width: 30px;
  min-height: 30px;
  font: bold 17px/29px 'Playfair Display';
  top: -20px;
  right: -9px;
  border: 1px solid #FC4040;
  background: #ff7270;
  border-radius: 13px;
  text-align: center;
  color: #fff;
  z-index: 900;
`;
