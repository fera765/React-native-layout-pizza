import React from 'react';
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Container } from './styles';

interface Visible {
  onRequestClose(): void;
  onPressOverlay(): void;
}

const ModalComponent: React.FC<Visible> = ({
  children,
  onRequestClose,
  onPressOverlay,
}) => {
  return (
    <View>
      <Modal animationType="fade" transparent onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onPressOverlay}>
          <Container>
            <Text style={{ fontSize: 30 }}>Ola{children}</Text>
          </Container>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ModalComponent;
