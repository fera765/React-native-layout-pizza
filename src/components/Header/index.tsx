import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Search } from './styles';

import Logo from '../../assets/logo.png';
import Menu from '../../assets/Frame.png';
import SearchIcon from '../../assets/search.png';

const Header: React.FC = () => (
  <Container>
    <TouchableOpacity>
      <Image source={Menu} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={Logo} style={{ marginTop: -30 }} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Search>
        <Image source={SearchIcon} />
      </Search>
    </TouchableOpacity>
  </Container>
);

export default Header;
