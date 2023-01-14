import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Title = () => {
  return (
    <Wrapper>
      <Text>subtitulo</Text>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.View`
  width: 100%;
  background: yellow;
  align-items: center;
  justify-content: center;
`;
