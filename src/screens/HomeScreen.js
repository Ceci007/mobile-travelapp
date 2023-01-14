import React from 'react';
// import {Text} from 'react-native';
import styled from 'styled-components/native';
import Title from '../components/Title';

const HomeScreen = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background: blue;
`;
