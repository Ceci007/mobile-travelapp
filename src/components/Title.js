import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Title = () => {
  const [slogan, setSlogan] = useState('just random text');

  const onTextPress = () => {
    setSlogan('My slogan!!');
  };

  return (
    <Wrapper>
      <Text onPress={onTextPress}>{slogan}</Text>
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
