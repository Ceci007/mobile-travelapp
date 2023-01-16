import React from 'react';
import styled from 'styled-components/native';
import GradientText from './GradientText';

const Title = ({subtitle, title}) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <GradientText style={{fontSize: 40, fontWeight: 900}}>
        {title}
      </GradientText>
      <Text>Explore Attractions</Text>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: 300;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 18px;
`;
